
import { getProducts } from '@/action/server/service';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Service =async () => {
    const data = await getProducts()
    const filterData = data.slice(0, 3)
    console.log(filterData)


    return (
        <div className="">
            <h1 className="text-center font-bold md:mb-3 md:text-4xl">service overview</h1>
        <div className="grid grid-cols-3 gap-3">
          {filterData.map((item, index) => (
            <div key={index} className="card bg-base-100  shadow-sm">
              <figure>
                <Image
                  src={item.image}
                  alt="card-img"
                  width={500}
                  height={300}
                ></Image>
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.shortDescription}</p>
                <div className="card-actions justify-end">
                  <Link
                    href={`/service/${item._id}`}
                    className="btn btn-primary w-full"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-5">
          <Link
            href={`/booking`}
            className="btn btn-primary "
          >
            View More
          </Link>
        </div>
      </div>
    )
};

export default Service;