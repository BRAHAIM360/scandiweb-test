import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { MButton } from '../../components/button';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { InputText } from '../../components/inputText';
import { SelectBox } from '../../components/selectBox';
import { apiService } from '../../services/apiService';
import './styles.scss';


export const AddProduct = () => {


    const [sku, setSku] = useState("")
    const [skuError, setSkuError] = useState("")

    const [name, setName] = useState("")
    const [nameError, setNameError] = useState("")
    const [price, setPrice] = useState("")
    const [priceError, setPriceError] = useState("")
    const [size, setSize] = useState("")
    const [sizeError, setSizeError] = useState("")
    const [weight, setWeight] = useState("")
    const [weightError, setWeightError] = useState("")
    const [height, setHeight] = useState("")
    const [heightError, setHeightError] = useState("")
    const [width, setWidth] = useState("")
    const [widthError, setWidthError] = useState("")
    const [length, setLength] = useState("")
    const [lengthError, setLengthError] = useState("")

    const [buttonDisabel, setbuttonDisabel] = useState(true)
    const [displayError, setDisplayError] = useState(false)

    const [selected, setSelected] = useState("")
    const options = ["", "DVD", "Book", "Furniture"]
    const onSubmitSave = () => {
        if (!buttonDisabel) {

            if (selected === "DVD") {
                apiService.post("/addProduct.php", { sku, name, price, productType: "DVD", size }).then((res) => {
                    window.location.href = "/product/list";

                }).catch((err) => {
                    alert(size)
                    console.log("size= ", size)
                    setDisplayError(true)
                })
            }
            if (selected === "Book") {
                apiService.post("/addProduct.php", { sku, name, price, productType: "Book", weight }).then((res) => {
                    window.location.href = "/product/list";

                }).catch((err) => {
                    setDisplayError(true)
                })
            }
            if (selected === "Furniture") {
                apiService.post("/addProduct.php", { sku, name, price, productType: "Furniture", height, width, length }).then((res) => {
                    window.location.href = "/product/list";


                }).catch((err) => {
                    setDisplayError(true)
                })
            }
        }
    }
    useEffect(() => {
        if (sku && name && price) {
            if (selected === "DVD" && size) {
                setbuttonDisabel(false)
            } else if (selected === "Book" && weight) {
                setbuttonDisabel(false)
            } else if (selected === "Furniture" && height && width && length) {
                setbuttonDisabel(false)
            } else {
                setbuttonDisabel(true)
            }

        } else {
            setbuttonDisabel(true)
        }

        !sku ? setSkuError("SKU should not be empty") : setSkuError("")
        !name ? setNameError("Name should not be empty") : setNameError("")
        !price ? setPriceError("Price should not be empty") : setPriceError("")
        !size ? setSizeError("Size should not be empty") : setSizeError("")
        !weight ? setWeightError("Weight should not be empty") : setWeightError("")
        !height ? setHeightError("Height should not be empty") : setHeightError("")
        !width ? setWidthError("Width should not be empty") : setWidthError("")
        !length ? setLengthError("Length should not be empty") : setLengthError("")
    }, [sku, name, price, size, weight, height, width, length, selected])





    return (
        <>
            <Header>
                <div>
                    <h1 id='title' >Add Product</h1>
                </div>
                <img src="/logo.png" alt="product" onClick={() => window.location.href = "/"} />
                <div className='header-left'>
                    <MButton id={"Save"} onClick={onSubmitSave} name="Save" disbaled={buttonDisabel} />
                </div>

            </Header>

            <form className='add-product-container' id='product_form'>
                {displayError && <h3 className='error'>SKU alerdy existe</h3>}
                <InputText id='sku' errorText={skuError} type='text' label="SKU :" value={sku} onChange={setSku} />
                <InputText id='name' errorText={nameError} type='text' label="Name :" value={name} onChange={setName} />
                <InputText id='price' errorText={priceError} type='number' label="Price($) :" value={price} onChange={setPrice} />
                <SelectBox id='productType' key="select" label='ProductType :' options={options} selected={selected} setSelected={setSelected} />
                {
                    selected === "DVD" &&
                    <>
                        <InputText id='size' key="Size" errorText={sizeError} type='number' label="Size(MB) :" value={size} onChange={setSize} />
                        <p>Please, provide size in MB</p>

                    </>
                }
                {
                    selected === "Book" &&
                    <>
                        <InputText id='weight' key="Weight" errorText={weightError} type='number' label="Weight(KG) :" value={weight} onChange={setWeight} />
                        <p>Please provide Weight in KG </p>
                    </>
                }
                {
                    selected === "Furniture" &&
                    <>
                        <InputText id='height' key="Height" errorText={heightError} type='number' label="Height(CM) :" value={height} onChange={setHeight} />
                        <InputText id='width' key="Width" errorText={widthError} type='number' label="Width(CM) :" value={width} onChange={setWidth} />
                        <InputText id='length' key="Length" errorText={lengthError} type='number' label="Length(CM) :" value={length} onChange={setLength} />
                        <p>Please provide dimensions in HxWxL in CM</p>

                    </>
                }

            </form>

            <Footer />
        </>
    );
}

