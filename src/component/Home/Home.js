import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';


const Home = () => {
    const [products, serProducts] = useState([]);

    useEffect(() => {
        fetch('https://young-refuge-73077.herokuapp.com/products')
            .then(res => res.json())
            .then(data => serProducts(data));
        // console.log(data))

    }, []);
    const handleAddProduct = () => {
        console.log('added')
    }
    return (
        <div className="row">
            {
                products.map(pd => <Product
                    handleAddProduct={handleAddProduct}
                    // pd={products}
                    product= {pd}
                ></Product>)
            }
        </div>
    );
};

export default Home;