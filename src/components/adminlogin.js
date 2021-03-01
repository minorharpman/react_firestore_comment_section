
import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';


function Adminlogin(props) {

    const [title, setTitle] = useState("");
    const [valami, setValami] = useState('open');
    const [message, setMessage] = useState('');




    useEffect(() => {
        changeView();

        console.log("suti status LOgin :" + Cookies.get('openstatus'));
        console.log("LOgin status valami :" + valami);


    }, []);



    const changeView = () => {

        if ((typeof valami !== "undefined" && valami == "open") && Cookies.get('openstatus') == "open") {
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
            setTitle("");
            setMessage("");
            window.location.reload(false);
        } else {
            console.log("False");
            setMessage("Bad password!");
         
        }

    };



    const handleSubmit2 = () => {
        setValami("open");
        Cookies.set('openstatus', 'hidden');
        props.changeFunction("hidden");
        window.location.reload(false);



    };






    return (

        <div className="row  mt-4 mb-4 p-4 bg-secondary text-white ">

         
             <div  className="col-md-12 text-right">{message}</div>
            <div className={valami == "hidden" ? "open offset-md-6 col-md-6 form-inline " : "hidden"}  >
                <label className=" m-2" >Password:</label>
                <input
                    className="form-control m-2"
                    type="password"

                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <button className=" btn btn-primary   m-2 ml-auto "
                    onClick={handleSubmit}
                >
                    Login
                  </button>

            </div>


            <div className={valami == "hidden" ? "hidden" : "open offset-md-6 col-md-6 form-inline "}  >
                <button className="btn btn-danger  ml-auto"
                    onClick={handleSubmit2}
                >
                    Logout
                  </button>
            </div>
        </div>


    );


};
export default Adminlogin;

