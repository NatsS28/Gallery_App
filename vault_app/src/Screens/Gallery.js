import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import './Gallery.css';
import React, { useState, useEffect } from 'react';

const Gallery = () => {



    const [postList, setPostList] = useState([]);
    let history = useHistory();

    useEffect(() => {


        Axios.get("http://localhost:9999/products/").then((data) => {
            setPostList(data.data.products);
            //   console.log(data.data.products);


        })

    });
    const forDelete = (e, id) => {
        console.log(e);
        console.log("id: " + id);
        Axios.post(`http://localhost:9999/products/delete/${id}`).then((data) => {
            console.log(data)
        }).catch((e) => {
            console.log(e);
        })

    }


    const imageCard = val => (
        <div className="card todesign" style={{ width: "25rem", height: "30rem", marginLeft: "5rem", marginBottom: "5rem" }}
        >
            <img src={"http://localhost:9999/" + val.productImage} className="card-img-top rounded-circle" />

            <button className="btn btn-light delete-button"
                onClick={e => forDelete(e, val._id)}
            >
                <i className="far fa-trash-alt"></i>
            </button>
            <hr></hr>
            <button onClick={() => {
                history.push(`/photo/${val._id}`)
            }}>View Image</button>
            <div className="card-body">
                <h5>{val.name}</h5>


            </div>

        </div>



    )
    return (
        <div className="row">

            <div className="col-md-4">
            </div>

            <form className="search-form" style={{ marginBottom: "50px", alignItems: "center", justifyContent: "center", display: 'flex' }}>
                <input className="search-bar" type="text" placeholder="Enter your image name" />
                <button className="search-button" type="submit">Search</button>
            </form>
            <div className="col-md-12 tab" >
                <table>
                    <tbody>
                        {
                            //tr > 3 td
                            [...Array(Math.ceil(postList.length / 2))].map((e, i) =>
                                <tr key={i}>
                                    <td>{imageCard(postList[2 * i])}</td>
                                    <td>{postList[2 * i + 1] ? imageCard(postList[2 * i + 1]) : null}</td>
                                    <td>{postList[2 * i + 2] ? imageCard(postList[2 * i + 2]) : null}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

            {/**    <div className="homescreen_products">
                {postList.map((val, key) => {
                    return (
                        <div className="product">
                            <div className="product_info">

                                <p className="info_name">{val.name}</p>
                                <p className="info_description"><span>Thoughts</span><br></br>
                                    {val.productImage}</p>

                                <img src={"http://localhost:9999/" + val.productImage}></img>


                            </div>
                        </div>

                    )

                })}



            </div>*/}



        </div>
    )
}

export default Gallery;