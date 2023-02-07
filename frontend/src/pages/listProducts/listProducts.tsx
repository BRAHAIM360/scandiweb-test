import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { MButton } from '../../components/button';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { ProductCard } from '../../components/productCard';
import { SelectBox } from '../../components/selectBox';
import { apiService } from '../../services/apiService';
import './styles.scss';


export interface IProduct {
    sku: string;
    name: string;
    price: number;
    productType: string;
    size?: number;
    weight?: number;
    height?: number;
    width?: number;
    length?: number;

}

export const ListProducts = () => {
    const [products, setProducts] = useState([]);
    const [itemsToDelete, setItemsToDelete] = useState([]);

    useEffect(() => {
        console.log(itemsToDelete)
    }, [itemsToDelete])
    useEffect(() => {
        apiService.get("/getProducts.php").then((res) => {
            setProducts(res.data.data)
            console.log(res.data.data)
        }
        )
    }, [])
    const onSubmitMassDelete = () => {

        apiService.delete("/deleteProducts.php", { data: { skus: itemsToDelete } }).then((res) => {
            apiService.get("/getProducts.php").then((res) => {
                setProducts(res.data.data)
            }
            )
        }
        )
    }
    const onSubmitAdd = () => {
        window.location.href = "/product/new"
    }




    return (
        <>
            <Header>
                <div>
                    <h1 id="title" >List Products</h1>
                </div>
                <img src="/logo.png" alt="product" />

                <div className='header-left'>
                    {/* <SelectBox key='selectbox' options={options} selected={selectedIndex} setSelected={setSelectedIndex} /> */}
                    <MButton id="ADD" onClick={onSubmitAdd} name="ADD" />
                    <MButton id="MASS DELETE" onClick={onSubmitMassDelete} name="MASS DELETE" />
                </div>

            </Header>
            <div className="ListProducts">
                {products?.map((product: any) => {
                    return <ProductCard key={product.sku} {...product} setItemsToDelete={setItemsToDelete} itemsToDelete={itemsToDelete} />
                })
                }

            </div>

            <Footer />
        </>

    );
}


