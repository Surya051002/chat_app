import Card from "./Card";
import Menu from "./Menu";
import Navbar from "./Navbar";
import '../CSS/Home.css';

const Home=()=>{
    return(
        <div className="home">
            <Navbar/>
            <Menu/>
           <Card/>
           <Card/>
           <Card/>
           <Card/><Card/>
           <Card/><Card/><Card/><Card/><Card/>
        </div>
    )
}
export default Home;