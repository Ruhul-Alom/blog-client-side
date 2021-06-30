import BlogDetails from "./Components/Blog/BlogDetails.js";
import Home from "./Components/Home/Home.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LogIn from "./Components/LogIn/LogIn.js";
import AllBlog from "./Components/Admin/AddBlog/AllBlog.js";
import AddBlog from './Components/Admin/AddBlog/AddBlog'



function App() {
  return (
    <div >
   <Router>
   <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
       <Route path="/blogDetails/:_id">
            <BlogDetails/>
          </Route>
          <Route path="/allBlog">
            <AllBlog />
          </Route>
          <Route path="/addBlog">
            <AddBlog />
          </Route>
          </Switch>
          </Router>    
    </div>
  );
}

export default App;
