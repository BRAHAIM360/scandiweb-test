import React, { useEffect, useState } from 'react';
import { IProduct } from '../../pages/listProducts';
import './styles.scss';

interface IProductCard extends IProduct {
    setItemsToDelete: (items: any) => void;
    itemsToDelete: any;
}


export const ProductCard = (props: IProductCard) => {
    const [checked, setChecked] = useState(false)
    useEffect(() => {
        if (checked) {
            props.setItemsToDelete([...props.itemsToDelete, props.sku])
        } else {
            props.setItemsToDelete(props.itemsToDelete.filter((item: any) => item !== props.sku))
        }
    }, [checked])

    return (
        <div className="ProductCard">
            <input type="checkbox" checked={checked} onChange={(e) => { setChecked(!checked) }} ></input>
            <div>{props.sku}</div>
            <div>{props.name}</div>
            <div>{props.price} $</div>
            {props.productType === "disc" && <div>Size: {props.size} MB</div>}
            {props.productType === "book" && <div>Weight: {props.weight} KG</div>}
            {props.productType === "furniture" && <div>Dimension: {props.height}x{props.width}x{props.length}</div>}

        </div>
    );
}

