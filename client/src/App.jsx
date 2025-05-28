import Home from "./components/home/Home";
import {Routes,Route} from "react-router-dom";
import PageNotFound from'./components/pagenotfound/PageNotFound';
import Electronics from "./components/mainsection/electronics/Electronics";

function App() {

  return (
   <>
   <Electronics></Electronics>
    <Routes>
      <Route path={'/'} element = {<Home/>}/>
      <Route path={'*'} element = {<PageNotFound/>}/>
    </Routes>
   
   </>
  )
}

export default App
