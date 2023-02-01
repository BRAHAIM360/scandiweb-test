import React, { useState } from 'react';
import './styles.scss';


export const ProductCard = (props: any) => {
    const [checked, setChecked] = useState(false)
    return (
        <div className="ProductCard">
            <input type="checkbox" checked={checked} onChange={(e) => { setChecked(!checked) }} ></input>
            <div>{props.sku}</div>
            <div>{props.name}</div>
            <div>{props.price} $</div>
            {props.productType === "disc" && <div>size: {props.size} MB</div>}
            {props.productType === "book" && <div>weight: {props.weight} KG</div>}
            {props.productType === "furniture" && <div>Dimension: {props.height}x{props.width}x{props.length}</div>}
        </div>
    );
}

