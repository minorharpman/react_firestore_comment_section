
import db from "../lib/firebase";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


function Post(props) {





    return (
        <div>
      
            <div className="row m-2" >

                <div className="col" > {props.post.title}</div>
                <div className="col" > {props.post.mydate}</div>
               {/*<div className="col" > {String(props.post.createdAt)}</div> */}
       
      

            </div>



         
        </div>
    );
};
export default Post;