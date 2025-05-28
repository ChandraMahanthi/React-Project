import Header from "../header/Header";
import Mainsection from "../mainsection/Mainsection";
import Footer from "../footer/Footer";

function Home()
{
    return(
    <>
        <div>
          <Header/>
          <h1>Home Component</h1>
          <Mainsection/>
          <Footer/>
        </div>
    </>)
}

export default Home;