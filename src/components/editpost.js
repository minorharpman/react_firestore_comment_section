import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import db from "../lib/firebase";

function Editpost(props) {

    const { params } = props.match;
    const [post, setPost] = useState([]);
    const [title, setTitle] = useState("");
    const history = useHistory();
   
    // console.log(props.location.pathname);
    console.log(params.id);

    useEffect(() => {
        getData(params.id);
    }, []);

    const getData = async (id) => {

        //console.log("id: " + id);
        await db.collection("posts").doc(id).get().then(doc => {
            const data = doc.data();
            console.log(data); 
            setPost(data);
            setTitle(data.title );
        }
        ).catch(function (error) {
            console.error("Error : ", error);
        });



    };

    const handleSubmit = async (id) => {
        console.log("edit id: " + String(id));

        //EdIT
     
        await db.collection("posts").doc(id).update({
     
            title: title
        }).then(function () {
            console.log("Document successfully Updated!");
            history.push("/");
        }).catch(function (error) {
            console.error("Error : ", error);
        });



    };



    //https://stackoverflow.com/questions/37427508/react-changing-an-uncontrolled-input 
    /*
     Warning: A component is changing an uncontrolled input to be controlled. 
    This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled 
    input element for the lifetime of the component.*/ 
    return (

        <div className="row  mt-4 mb-4 p-4 bg-warning ">

            <div className="col" >Edit post:</div>
            <div className="col" >ID:{params.id}   {post.title}</div>
    
            <div className="col-md-6" >
                <input
                    type="text"
                    className="form-control"
                    value={title }
                    onChange={(e) => setTitle(e.target.value )}
           
                />

            </div>
            <div className="col" > <button className="btn btn-danger" onClick={(e) => handleSubmit(params.id)} >Save  </button></div>
            <div className="col"><Link className="btn btn-primary" to={"/"} >Close</Link></div>








        </div>


    );
};
export default Editpost;