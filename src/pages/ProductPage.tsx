import React from 'react'
import CategoryFillter from '../components/CategoryFillter';
import { ProductType } from './types/product'

type ProductPageProps = {
    product: ProductType[];
}

const ProductPage = ({ product }: ProductPageProps) => {
    return (
        <div className="bg-white w-screen mt-20 ">
            
            <div className=" mx-auto max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold  text-gray-900 my-3">Products</h2>

                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

                    {product?.map((item) =>
                        <a href="#" className="group">
                            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="w-full h-full object-center object-cover group-hover:opacity-75" />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{item.name}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">{item.price}$</p>
                        </a>

                    )}
                    {product?.map((item) =>
                        <a href="#" className="group">
                            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="w-full h-full object-center object-cover group-hover:opacity-75" />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{item.name}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">{item.price}$</p>
                        </a>

                    )}
                </div>
            </div>
        </div>

    )
}

export default ProductPage