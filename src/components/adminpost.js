
import db from "../lib/firebase";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


function Adminpost(props) {


    const handleSubmit = async (id) => {
       // console.log("id: " + String(id));


        //https://firebase.google.com/docs/firestore/manage-data/delete-data#fields
         await db.collection("posts").doc(id).delete().then(function () {
             console.log("Document successfully deleted!");
             props.changeFunction();
         }).catch(function (error) {
             console.error("Error removing document: ", error);
         });


    };


    return (
        <div className={props.open ?    "open" : "hidden"}>
      
            <div className="row m-2" >
                <div className="col" >Post: </div>
                <div className="col"> {props.post.id}</div>
                <div className="col" > {props.post.title}</div>
                <div className="col" > {props.post.mydate}</div>
               {/*<div className="col" > {String(props.post.createdAt)}</div> */}
                <div className="col" > <button className="btn btn-danger" onClick={(e) => handleSubmit(props.post.id)} >Delete  </button></div>
                <div className="col" ><Link className="btn btn-primary" to={"/editpost/"+props.post.id} >Edit</Link></div>

            </div>



         
        </div>
    );
};
export default Adminpost;