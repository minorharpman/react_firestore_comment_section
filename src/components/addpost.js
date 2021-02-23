
import React, { useState } from "react";
import db from "../lib/firebase";

function AddPost(props) {

    const [title, setTitle] = useState("");

    const handleSubmit = async () => {
        const date = new Date();
        await db.collection("posts").add({
            title,
           // createdAt: date.toUTCString(),
            createdAt: db.serverTimestamp ,

        }).then(function () {
            console.log("Document successfully Added!");
            props.changeFunction();
        }).catch(function (error) {
            console.error("Error : ", error);
        });

        setTitle("");
    };
    return (

        <div className="row  mt-4 mb-4 p-4 bg-warning">
            <div className="col-md-2">
                Write me:
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
export default AddPost;