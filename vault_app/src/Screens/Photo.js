

import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './Photo.css';
import { useHistory, useParams } from 'react-router-dom';
const Photo = () => {

    let pId = window.location.pathname;
    var id = pId.substring(pId.lastIndexOf('/') + 1);

    const [image, setImage] = useState({});

    useEffect(() => {

        // console.log(postId);
        console.log("dest : " + id);


        Axios.post(`http://localhost:9999/products/photo/${id}`).then((data) => {
            console.log(data);
            setImage({ name: data.data.response.name, desc: data.data.response.desc, productImage: data.data.response.productImage })
            // console.log(setImage);


        })
    });

    return (
        <div className="product1">
            <div className="product_info">
                <p className="info_name1"> {image.name}</p>
                <p className="info_description1"><br></br>{image.desc}</p>
                <img src={"http://localhost:9999/" + image.productImage} className="galleryImage" />
            </div>

        </div>

    )
}


export default Photo;