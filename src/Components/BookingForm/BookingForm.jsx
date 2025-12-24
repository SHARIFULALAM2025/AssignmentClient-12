'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const BookingForm = ({ LocationData, ServiceData }) => {
    const router = useRouter()
    const {  data:session,status } = useSession()
    useEffect(() => {
        if (status==="authenticated") {
            router.push("/login")
        }
    }, [status,router])
  const [selectedDivision, setSelectedDivision] = useState('')
  const [selectedDistrict, setSelectedDistrict] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const [selectedArea, setSelectedArea] = useState('')
  //
  const district = LocationData.filter(
    (item) => item.region === selectedDivision
  )
  const City = district.filter((item) => item.district === selectedDistrict)
  const Area = City.length ? City[0].covered_area : []
    /*total cost calculation  */
      const [Duration, setDuration] = useState(1)
      const [DurationType, setDurationType] = useState('Hours')
  const totalCost =
    DurationType === 'Hours'
      ? Duration * ServiceData.pricePerHour
      : Duration * 24 * ServiceData.pricePerHour

  /*  */

  /* collect form data using  react hook form */
  const { register, handleSubmit } = useForm()
  const handelBooking = (data) => {
    const {
      area,
      city,
      duration,
      durationType,
      selectDistrict,
      selectDivision,
    } = data

    const serviceInfo = {
      service_id: ServiceData._id,
      user: session?.user?.email,
      duration,
      durationType,
      city,
      area,
      selectDistrict,
      selectDivision,
      totalCost,
      status: 'Pending',
      createAt: new Date().toISOString(),
      }
      console.log(serviceInfo)

  }
  if (!ServiceData) {
    return <p> service not found...</p>
  }
  return (
    <form onSubmit={handleSubmit(handelBooking)} className="space-y-3">
      <div className="grid grid-cols-3">
        <div className="">
          <label htmlFor="">Duration:</label>
          <br></br>
          <input
            value={Duration}
            {...register('duration', { require: true, valueAsNumber: true })}
            onChange={(e) => setDuration(e.target.value)}
            type="number"
            placeholder="Type here"
            className="input"
          />
        </div>
        <div className="">
          {' '}
          <label htmlFor="">DurationType:</label>
          <br></br>
          <select
            {...register('durationType', { require: true })}
            className="select"
            value={DurationType}
            onChange={(e) => setDurationType(e.target.value)}
          >
            <option value="Hours">Hours</option>
            <option value="Day">Day</option>
          </select>
        </div>
        <div className="">
          <label htmlFor="">Division:</label>
          <br></br>
          <select
            {...register('selectDivision', { require: true })}
            value={selectedDivision}
            onChange={(e) => {
              setSelectedDivision(e.target.value)
              setSelectedDistrict('')
              setSelectedCity('')
              setSelectedArea('')
            }}
            className="select"
          >
            <option value="" disabled={!selectedDivision}>
              select Division
            </option>
            {[...new Set(LocationData.map((division) => division.region))].map(
              (region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              )
            )}
          </select>
        </div>
        <div className="">
          <label htmlFor="">District:</label>
          <br></br>
          <select
            {...register('selectDistrict', { require: true })}
            value={selectedDistrict}
            onChange={(e) => {
              setSelectedDistrict(e.target.value)
              setSelectedCity('')
              setSelectedArea('')
            }}
            className="select"
          >
            <option value="" disabled={!selectedDistrict}>
              select district
            </option>
            {district.map((item) => (
              <option key={item.district} value={item.district}>
                {item.district}
              </option>
            ))}
          </select>
        </div>
        <div className="">
          <label htmlFor="">City:</label>
          <br></br>
          <select
            {...register('city', { require: true })}
            value={selectedCity}
            onChange={(e) => {
              setSelectedCity(e.target.value)
              setSelectedArea('')
            }}
            className="select"
          >
            <option value="" disabled={!selectedCity}>
              select City
            </option>
            {City.map((item) => (
              <option key={item.city} value={item.city}>
                {item.city}
              </option>
            ))}
          </select>
        </div>
        <div className="">
          <label htmlFor="">Area:</label>
          <br></br>
          <select
            {...register('area', { require: true })}
            value={selectedArea}
            onChange={(e) => setSelectedArea(e.target.value)}
            className="select"
          >
            <option disabled={true}>select Area</option>
            {Area.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className=" flex items-center justify-center">
        <button
          type="submit"
          className="btn btn-outline bg-green-600 text-white"
        >
          Conform Booking
        </button>
      </div>
    </form>
  )
}

export default BookingForm
