import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card = ({ item }) => {
    const { title, image, shortDescription,_id } = item
    return (
      <div className="card bg-base-100  shadow-sm">
        <figure>
          <Image src={image} alt="card-img" width={500} height={300}></Image>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{shortDescription}</p>
          <div className="card-actions justify-end">
            <Link href={`/service/${_id}`} className="btn btn-primary w-full">View Details</Link>
          </div>
        </div>
      </div>
    )
};

export default Card;