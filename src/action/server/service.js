"use server";

import { collection, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const getProducts = async () => {
    const products = await dbConnect(collection.PRODUCTS).find().toArray();
    return products;
};

export const getService = async () => {
    const products = await dbConnect(collection.Service).find().toArray();
    console.log(products);

    return products;
};
export const getSingleProduct = async (id) => {
    if (id.length != 24) {
        return {};
    }
    const query = { _id: new ObjectId(id) };

    const product = await dbConnect(collection.PRODUCTS).findOne(query);

    return { ...product, _id: product._id.toString() } || {};
};