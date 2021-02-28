
import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';



function Adminlogin(props) {

    const [title, setTitle] = useState("");
    const [valami, setValami] = useState('open');



    useEffect(() => {
        changeView();

        console.log("suti status LOgin :" + Cookies.get('openstatus'));
        console.log("LOgin status valami :" + valami);


    }, []);



    const changeView = () => {

        if ( (typeof valami !== "undefined" && valami =="open" )  && Cookies.get('openstatus') == "open") {
            console.log("Login A ág");


            setValami("open");
         

        } else {

            console.log("Login B ág");

            setValami("hidden");


        }

    }


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
        setValami("open");
        Cookies.set('openstatus', 'hidden');
        props.changeFunction("hidden");

        

    };






    return (

        <div className="row  mt-4 mb-4 p-4 bg-warning">
            <div className={valami == "hidden" ? "open col-md-2"  : "hidden"   } >
                Password:
            </div>
            <div className={valami == "hidden" ? "open col-md-2"  : "hidden" }  >
                <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

            </div>
            <div className="col-md-2" ></div>
            <button  className={valami == "hidden" ? "open btn btn-primary btn-lg col-md-2"  : "hidden"   }  
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