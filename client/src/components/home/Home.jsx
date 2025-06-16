import Header from "../header/Header";
import Mainsection from "../mainsection/Mainsection";
import Footer from "../footer/Footer";
import { Link} from 'react-router-dom';

// import Parent from '../nested/Parent';

function Home()
{
    return(
    <>
        <div>
          <Header/>
          <h1>Home Component</h1>
            <Link to='/parent'>Parent component</Link>
          {/* <Parent></Parent> */}
          <Mainsection/>
          <Footer/>
        </div>
    </>)
}

export default Home;