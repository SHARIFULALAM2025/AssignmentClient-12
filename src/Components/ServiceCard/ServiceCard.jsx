import { getProducts } from '@/action/server/service';
import React from 'react';
import Card from './Card';

const ServiceCard =async () => {
    const service =await getProducts() || []


    return (
      <div>
        <h1 className="text-center font-bold text-4xl">our services</h1>
        <div className="grid grid-cols-4 gap-2">{service.map((item,index)=><Card key={index} item={item} ></Card>)}</div>
      </div>
    )
};

export default ServiceCard;