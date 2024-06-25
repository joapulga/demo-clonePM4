import { IProduct } from "@/types";
import React from "react";

const Card: React.FC<IProduct> = ({ name, description, price, image, stock, categoryId }) => {
    return (
        <div className="max-w-[250px] max-h-[400px] w-full h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div>
                <img className="w-full h-[250px] mx-auto p-4 rounded-t-lg" src={image} alt="product image" />
            </div>
            <div className="px-5 pb-5">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
                </div>
            </div>
        </div>
    );
}

export default Card;
