
import React, { useState } from "react";


function Adminlogin() {

    const [title, setTitle] = useState("");

    const handleSubmit =  () => {


        console.log( "salt info: "+ process.env.REACT_APP_SALT );
        console.log( "title: "+ title );
       if(process.env.REACT_APP_SALT == title) {
           console.log("OK");
           //props-on keresztül nyitni az oldalt
       }else{
        console.log("False");
       }
      
    };
    return (

        <div className="row  mt-4 mb-4 p-4 bg-warning">
            <div className="col-md-2">
                Pass:
            </div>
            <div className="col-md-6" >
                <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

            </div>
            <div className="col-md-2" ></div>
            <button className="btn btn-primary btn-lg"
                onClick={handleSubmit}
            >
                Add
                  </button>
        </div>


    );
};
export default Adminlogin;