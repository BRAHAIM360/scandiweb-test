import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { MButton } from '../../components/button';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { InputText } from '../../components/inputText';
import { SelectBox } from '../../components/selectBox';
import './styles.scss';


export const AddProduct = () => {
    const onSubmitSave = () => {

    }

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


    const [selectedIndex, setSelectedIndex] = useState(1)
    const options = ["DISC", "BOOK", "FURNITURE"]
    return (
        <>
            <Header>
                <div>
                    <h1>Add Product</h1>
                </div>
                <div className='header-left'>
                    <MButton onClick={onSubmitSave} name="Save" disbaled={buttonDisabel} />
                </div>

            </Header>
            <div className='add-product-container'>
                <InputText errorText={skuError} type='text' label="SKU :" value={sku} onChange={setSku} />
                <InputText errorText={nameError} type='text' label="Name :" value={name} onChange={setName} />
                <InputText errorText={priceError} type='number' label="Price :" value={price} onChange={setPrice} />
                <SelectBox options={options} selected={selectedIndex} setSelected={setSelectedIndex} />
                {
                    selectedIndex === 0 && <InputText errorText={sizeError} type='number' label="Size :" value={size} onChange={setSize} />
                }
                {
                    selectedIndex === 1 && <InputText errorText={weightError} type='number' label="Weight :" value={weight} onChange={setWeight} />
                }
                {
                    selectedIndex === 2 &&
                    <>
                        <InputText errorText={heightError} type='number' label="Height :" value={height} onChange={setHeight} />
                        <InputText errorText={widthError} type='number' label="Width :" value={width} onChange={setWidth} />
                        <InputText errorText={lengthError} type='number' label="Length :" value={length} onChange={setLength} />
                    </>
                }

            </div>


            <Footer />
        </>
    );
}

