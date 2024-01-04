import '../CSS/Navbar.css'
import profile from '../assets/react.svg'
const Navbar=()=>{
    return(
        <div className="navbar">
            <img className='profile' src={profile}/>
            <h1>Name</h1>
        </div>
    )
}
export default Navbar;