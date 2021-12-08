import React from 'react';

const ProductFile = (props) => {

    let { product_name, brand_name, discription, price, date, image, state } = props
    return (
        <>
            <div style={{ background: 'grey', padding: '5px', display: 'grid', gridTemplateColumns: "1fr 1fr", gridTemplateRows: '1fr 1fr 1fr 1fr 1fr', gridGap: '10px', height: '80%' }} >
                <img src={image} style={{ width: '90%', gridRow: '1/3' }} alt="..." />
                <h5>{product_name}</h5>
                <p> {brand_name} </p>
                <p style={{ gridColumn: '2/3' }}>${price}</p>
                <p>{state} </p>
                <p>Date: {date}</p>
                <p style={{ gridColumn: '1/-1' }} >{discription}</p>
            </div>

        </>
    )
}

export default ProductFile;
