'use client'

import { getSingleService } from '@/action/server/service'
import { useMutation } from '@tanstack/react-query'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import Swal from 'sweetalert2'

const MyBooking = ({ ServiceBook }) => {
    const router=useRouter()
    console.log(ServiceBook)
    const { mutateAsync: DeleteService } = useMutation({
        mutationFn: (id) => getSingleService(id),
        onSuccess: () => {
            Swal.fire('success', 'delete successfully', 'success')
            router.refresh()
        },
        onError: () => {
          Swal.fire('error', 'service not found', 'error')
        }
    })
  const handelDelete = (id) => {
   DeleteService(id)
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th> Service image</th>
              <th> Service Name</th>
              <th>Duration</th>
              <th>duration Type</th>
              <th>Location</th>
              <th>Total Cost</th>
              <th>Status </th>
              <th>Action </th>
            </tr>
          </thead>
          <tbody>
            {ServiceBook.map((item, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <Image
                          src={item.image}
                          alt={item.title}
                          height={100}
                          width={120}
                        ></Image>
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.title}</td>
                <td>{item.duration}</td>
                <td>{item.durationType}</td>
                <td>
                  Division:{item.selectDivision},District:
                  {item.selectDistrict}, City:{item.city},Area:{item.area}
                </td>
                <td>{item.totalCost}</td>
                <td>{item.status}</td>
                <th>
                  <button
                    onClick={() => handelDelete(item._id)}
                    className="btn btn-primary"
                  >
                    Cancel
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyBooking
