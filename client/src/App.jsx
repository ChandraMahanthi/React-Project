import Home from "./components/home/Home";
import {Routes,Route} from "react-router-dom";
import PageNotFound from'./components/pagenotfound/PageNotFound';
import Electronics from "./components/mainsection/electronics/Electronics";
import Jewellery from "./components/mainsection/jewelery/Jewellery";
import MensClothing from "./components/mainsection/mensclothing/MensClothing";
import WomensClothing from "./components/mainsection/womensclothing/WomensClothing";
import ProductDetails from "./components/productDetails/ProductDetails";

function App() {

  return (
   <>

   {/* <h1>Hello</h1> */}
   {/* <Electronics></Electronics> */}
   {/* <Home></Home> */}
    <Routes>
      <Route path={'/'} element = {<Home/>}/>
      <Route path={'/electronics'} element = {<Electronics/>}/>
      <Route path={'/jewelery'} element = {<Jewellery/>}/>
      <Route path={'/mensclothing'} element = {<MensClothing/>}/>
      <Route path={'/womensclothing'} element = {<WomensClothing/>}/>
      <Route path={`/productdetails/:id`} element = {<ProductDetails/>}/>
      <Route path={'*'} element = {<PageNotFound/>}/>
    </Routes>
   </>
  )
}

export default App
