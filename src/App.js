import React, { useEffect}  from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import AddPost from "./components/addpost";
import List from "./components/list";
import Adminlist from "./components/adminlist";
import Editpost from "./components/editpost";

function App() {

  useEffect(() => {
    document.title = "React Js + Firestore Database Blog Demo";
  }, []);

  
  return (
    <div className="container" >

      <h2>What's on your mind?: </h2>

      <Router>


        <Switch>

          <Route exact path='/'   component={List} ></Route>
          <Route exact path='/adminlist' component={Adminlist} ></Route>
          <Route exact path='/editpost/:id' component={Editpost}></Route>

        </Switch>



      </Router>

    </div >
  );
}

export default App;