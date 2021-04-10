import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css'

const AddProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            price: data.price,
            imageURL: imageURL
        }
        // const url = `http://localhost:5055/addproduct`;
        const url = `https://young-refuge-73077.herokuapp.com/addproduct`;
        
        console.log(eventData)

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server site res'))
    };
    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '667adb79b6db39756c182165ffde265c');
        imageData.append('image', (event.target.files[0]));

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                // console.log(response.data.data.display_url);
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <div className="main-container">
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" type="product" placeholder="Product Name" {...register("name")} />
                <br />
                <input name="price" type="price" placeholder="Product Price" {...register("price")} />
                <br />

                <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;