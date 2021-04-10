import React, { useState } from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingBag } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    console.log(props)


    const product = props.product;
    console.log(product)
    const [items, setItems] = useState([]);


    const history = useHistory();
    const handleProduct = () => {
        history.push('/checkOut');

    }
    const deleteProduct = id => {

    }
    return (
        <div className="pro col-md-3">
            {/* <img src={product.imageURL} alt="" />
            <h4>{product.name}</h4>
            <h6>{product.price}</h6>
            <button onClick={handleProduct}>Buy Now</button> */}


            {/* <button onClick= {deleteProduct(Product._id)}></button> */}

            <CardDeck>
                <Card>
                    <Card.Img variant="top" src={product.imageURL} />
                    <Card.Body>
                        <h3>{product.name}</h3>
                        <h6>{product.price}</h6>

                    </Card.Body>
                    <Card.Footer>
                        <button onClick={handleProduct}> <FontAwesomeIcon icon={faShoppingBag} />  Buy Now   </button>
                    </Card.Footer>
                </Card>


            </CardDeck>




        </div>
    );
};

export default Product;