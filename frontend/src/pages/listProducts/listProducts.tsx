import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { MButton } from '../../components/button';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { ProductCard } from '../../components/productCard';
import { SelectBox } from '../../components/selectBox';
import './styles.scss';

const products = [{
    sku: "D4123",
    name: "Product 1",
    price: 100,
    productType: "disc",
    size: 200,
},
{
    sku: "D3123",
    name: "Product 1",
    price: 100,
    productType: "book",
    weight: 200,
},
{
    sku: "D3123",
    name: "chair",
    price: 100,
    productType: "furniture",
    height: 200,
    width: 200,
    length: 200,
}, {
    sku: "D4123",
    name: "Product 1",
    price: 100,
    productType: "disc",
    size: 200,
},
{
    sku: "D3123",
    name: "Product 1",
    price: 100,
    productType: "book",
    weight: 200,
},
{
    sku: "D3123",
    name: "chair",
    price: 100,
    productType: "furniture",
    height: 200,
    width: 200,
    length: 200,
}

]

export const ListProducts = () => {
    const onSubmitApply = () => {

    }
    const [selectedIndex, setSelectedIndex] = useState(0)
    const options = ["MASS DELETE", "ADD"]

    useEffect(() => {
        console.log(selectedIndex)

    }, [selectedIndex])

    return (
        <>
            <Header>
                <div>
                    <h1>List Products</h1>
                </div>
                <div className='header-left'>
                    <SelectBox options={options} selected={selectedIndex} setSelected={setSelectedIndex} />
                    <MButton onClick={onSubmitApply} name="APPLY" />
                </div>

            </Header>
            <div className="ListProducts">
                {products.map((product) => {
                    return <ProductCard {...product} />
                })
                }

            </div>

            <Footer />
        </>

    );
}


