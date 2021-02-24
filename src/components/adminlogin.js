
import React, { useState } from "react";
import Cookies from 'js-cookie';



function Adminlogin(props) {

    const [title, setTitle] = useState("");

    const handleSubmit = () => {


        console.log("salt info: " + process.env.REACT_APP_SALT);
        console.log("title: " + title);
        if (process.env.REACT_APP_SALT == title) {
            console.log("OK");
            //props-on keresztül nyitni az oldalt
            props.changeFunction("open");
        } else {
            console.log("False");
            
        }

    };



    const handleSubmit2 = () => {
    
        props.changeFunction("hidden");
        Cookies.set('openstatus', 'hidden');
    };

    return (

        <div className="row  mt-4 mb-4 p-4 bg-warning">
            <div className="col-md-2">
                Password:
            </div>
            <div className="col-md-2" >
                <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

            </div>
            <div className="col-md-2" ></div>
            <button className="btn btn-primary btn-lg col-md-2"
                onClick={handleSubmit}
            >
                Add
                  </button>
            <div className="col-md-2" ></div>
            <button className="btn btn-danger btn-lg col-md-2"
                onClick={handleSubmit2}
            >
                Remove
                  </button>
        </div>


    );
};
export default Adminlogin;