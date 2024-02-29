import React from "react";
import ProductCard from "./ProductCard";
export default function CategoryComponent({ title, products }) {
    return (
        <div style={{ maxWidth: '100%',display:'flex',flexWrap:'wrap',justifyContent:'space-between',borderRadius:'7px',backgroundColor:'white'}}>
            {products.map((data) => {
                return <ProductCard data={data} />
            })}
        </div>
    )
}