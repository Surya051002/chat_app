import profile from '../assets/react.svg';
import '../CSS/Card.css';
const Card=()=>{
    return(
        <div className='card'>
            <img src={profile} />
            <h3>Name</h3>
        </div>
    )
}
export default Card;