import React from "react";

function Tile ({title, children, image, description }) {
    return (
        <section>
            <h2>{title}</h2>
                {children}
            {image && <img src={image} alt={description} />}
        </section>
    );
}

export default Tile;