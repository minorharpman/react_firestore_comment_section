
import React, { useState } from "react";
import db from "../lib/firebase";


//https://stackoverflow.com/questions/62268617/how-to-delete-doc-in-firebase-with-react-application
//https://firebase.google.com/docs/firestore/manage-data/delete-data
//Cloud Firestore
//https://console.firebase.google.com/u/0/project/react-forum-demo-42cd4/firestore/data~2Fposts~2F3KqPYmZ9WiGTNyew9RY1
//https://stackoverflow.com/questions/47180076/how-to-delete-document-from-firestore-using-where-clause

function Superdelete(props) {

    const [title, setTitle] = useState("");

    const handleSubmit = async () => {
        await db.collection("posts").orderBy('title').startAt(title).endAt(title + '\uf8ff').get()
            .then(querySnapshot => {
                console.log("querySnapshot");
                console.log(querySnapshot);
                querySnapshot.forEach(function (doc) {
                    doc.ref.delete();
                });
            }).then(function () {
                console.log("Document(s) successfully deleted!");
                props.changeFunction();
            }).catch(function (error) {
                console.error("Error : ", error);
            });

        /* await db.collection("posts").where("title", "==", title).get()
             .then(querySnapshot => {
                 console.log("querySnapshot");
                 console.log(querySnapshot);
                 querySnapshot.forEach(function (doc) {
                     doc.ref.delete();
                 });
             });*/

        setTitle("");
    };
    return (
        <div className={props.open ? "open" : "hidden"}>
            <div className="row  mt-4 mb-4 p-4 bg-secondary text-white">
                <div className="col-md-12"><h4> Delete (start chars):</h4></div>
                <div className="col-md-2">
                    Type some  start chars of the Title:
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
                <button className="btn btn-danger btn-lg"
                    onClick={handleSubmit}
                >
                    Delete
                  </button>
            </div>
        </div>

    );
};
export default Superdelete;