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

    const [selectedIndex, setSelectedIndex] = useState(0)
    const options = ["", "DVD", "Book", "Furniture"]
    const onSubmitSave = () => {
        if (!buttonDisabel) {

            if (selectedIndex === 1) {
                apiService.post("/addProduct.php", { sku, name, price, productType: "disc", size }).then((res) => {
                    window.location.href = "/product/list";

                }).catch((err) => {
                    alert(size)
                    console.log("size= ", size)
                    setDisplayError(true)
                })
            }
            if (selectedIndex === 2) {
                apiService.post("/addProduct.php", { sku, name, price, productType: "book", weight }).then((res) => {
                    window.location.href = "/product/list";

                }).catch((err) => {
                    setDisplayError(true)
                })
            }
            if (selectedIndex === 3) {
                apiService.post("/addProduct.php", { sku, name, price, productType: "fourniture", height, width, length }).then((res) => {
                    window.location.href = "/product/list";


                }).catch((err) => {
                    setDisplayError(true)
                })
            }
        }
    }
    useEffect(() => {
        if (sku && name && price) {
            if (selectedIndex === 1 && size) {
                setbuttonDisabel(false)
            } else if (selectedIndex === 2 && weight) {
                setbuttonDisabel(false)
            } else if (selectedIndex === 3 && height && width && length) {
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
    }, [sku, name, price, size, weight, height, width, length, selectedIndex])





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
                <InputText id='price' errorText={priceError} type='number' label="Price :" value={price} onChange={setPrice} />
                <SelectBox id='productType' key="select" options={options} selected={selectedIndex} setSelected={setSelectedIndex} />
                {
                    selectedIndex === 1 &&
                    <>
                        <InputText id='size' key="Size" errorText={sizeError} type='number' label="Size :" value={size} onChange={setSize} />
                        <p>Please, provide size in MB</p>

                    </>
                }
                {
                    selectedIndex === 2 &&
                    <>
                        <InputText id='' key="Weight" errorText={weightError} type='number' label="Weight :" value={weight} onChange={setWeight} />
                        <p>Please provide Weight in KG </p>
                    </>
                }
                {
                    selectedIndex === 3 &&
                    <>
                        <InputText id='' key="Height" errorText={heightError} type='number' label="Height :" value={height} onChange={setHeight} />
                        <InputText id='' key="Width" errorText={widthError} type='number' label="Width :" value={width} onChange={setWidth} />
                        <InputText id='' key="Length" errorText={lengthError} type='number' label="Length :" value={length} onChange={setLength} />
                        <p>Please provide dimensions in HxWxL in CM</p>

                    </>
                }

            </form>
            <Footer />
        </>
    );
}

