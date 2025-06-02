import Home from "./components/home/Home";
import {Routes,Route} from "react-router-dom";
import PageNotFound from'./components/pagenotfound/PageNotFound';
import Electronics from "./components/mainsection/electronics/Electronics";

function App() {

  return (
   <>

   {/* <h1>Hello</h1> */}
   {/* <Electronics></Electronics> */}
   {/* <Home></Home> */}
    <Routes>
      <Route path={'/'} element = {<Home/>}/>
      <Route path={'/electronics'} element = {<Electronics/>}/>
      <Route path={'*'} element = {<PageNotFound/>}/>
    </Routes>
   </>
  )
}

export default App
