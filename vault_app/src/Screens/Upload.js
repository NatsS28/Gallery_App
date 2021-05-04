
import './upload.css'
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
const Upload = () => {

    const [name, setUserName] = useState("");
    const [desc, setTitle] = useState("");
    const [Image, setImage] = useState("");


    async function uploadPost() {
        console.log(Image);
        let item = { name, desc, Image };
        console.log(item);
        const formdata = new FormData();
        formdata.append('name', name);
        formdata.append('desc', desc);
        formdata.append('productImage', Image);
        for (var value of formdata.values()) {
            console.log(value);
        }


        let result = await fetch("http://localhost:9999/products", {

            method: "POST",
            body: formdata,


        })
        console.log(result);
        alert('Data saved');
        //  history.push("/homescreen");
        {/** Axios.get("http://localhost:2005/products").then((data) => {
            console.log(data);

        })

           Axios({
            method: "POST",
            url: "https://cors-anywhere.herokuapp.com/localhost:2005/products",
            data: formdata,
            headers: {
                "Content-Type": "multipart/form-data",
                "Access-Control-Allow-Origin": "*"
            },
        })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });*/}




    };
    return (
        <div className="container">
            <div className="inner">
                <h1>Upload your Image</h1>
                <label for="name" className='log'>Name</label>
                <input type="name" className="form-control" id="name" name="name" placeholder="name" required
                    onChange={(e) => {
                        setUserName(e.target.value);
                    }} />
                <label for="name" className='log'>Description</label>
                <input type="text" className="form-control" id="desc" name="desc" placeholder="Description" required
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }} />
                <label for="name" className='log'>upload your image</label>
                <input type="file" className="form-control" id="file" name="file" placeholder="file" required
                    onChange={(e) => {
                        console.log(e);
                        setImage(e.target.files[0]);
                    }} />
                <button onClick={uploadPost} className="btns"> Upload Image</button>

            </div>
        </div>
    )

}

export default Upload;