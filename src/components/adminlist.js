import React, { useEffect, useState } from "react";
import Adminpost from "../components/adminpost";
import AddPost from "../components/addpost";
import Adminlogin from "../components/adminlogin";
import Superdelete from "../components/superdelete";
import db from "../lib/firebase";
import Cookies from 'js-cookie';

function Adminlist() {

    //Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.
    //https://reactjs.org/docs/hooks-state.html
    const [posts, setPosts] = useState([]);
    const [open, setOpen] = useState('hidden');


    //https://reactjs.org/docs/hooks-effect.html
    //They let you use state and other React features without writing a class.  // componentDidMount(), componentDidUpdate()
    //useEffect hook can be used to replicate lifecycle behavior, and useState can be used to store state in a function component.
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        refreshData();
        opener();
    }, []);


    const opener = (a) => {
        console.log("openstatus: " +  Cookies.get('openstatus'));
        console.log("test adminlist:" + a);
        console.log("test adminlist open :" + open);

        if(a =="open" || Cookies.get('openstatus') == "open"){
            Cookies.set('openstatus', 'open');
            setOpen("open");
        }else if( Cookies.get('openstatus') == "hidden"){
            Cookies.set('openstatus', 'hidden');
            setOpen("hidden");
        }


    }

    const refreshData = () => {
        //console.log("db:");
        //console.log(db.serverTimestamp);


        db.collection("posts")
            .orderBy("createdAt", "desc")
            .get()
            .then((querySnapshot) => {

                // const data = querySnapshot.docs.map(doc => doc.data());
                /*const data = querySnapshot.docs.map((doc) => ({
                  id: doc.id,
                  ...doc.data(),
                }));*/

                const mydata = querySnapshot.docs.map(doc => {
               //     console.log(new Date(doc.data().createdAt.seconds * 1000).toISOString().slice(0, 10));

                    const foo = {
                        ...doc.data(),
                        id: doc.id,
                        mydate: new Date(doc.data().createdAt.seconds * 1000).toISOString().slice(0, 10),
                    };

                    return foo;
                });

                setPosts(mydata);
            });
        //console.log("posts");
        // console.log(posts);
    };


    //https://stackoverflow.com/questions/45898789/react-router-pass-param-to-component
    //https://ui.dev/react-router-v4-pass-props-to-components/
    return (

        <div >


            <AddPost changeFunction={refreshData} open={open} />

            {posts.map((post) => (
                <Adminpost post={post} key={post.id} changeFunction={refreshData} open={open} />
            ))}

            <Superdelete changeFunction={refreshData} open={open} />

            <Adminlogin changeFunction={opener} />

        </div>

    );
}

export default Adminlist;
