import React from "react";

function Product({best_seller, image, title, description, price}) {
    return (
        <article>
            <span>{best_seller}</span>

            <img src={image} alt={title} />

            <p>{description}</p>

            <h4>{price}</h4>
        </article>
    );
}

export default Product;