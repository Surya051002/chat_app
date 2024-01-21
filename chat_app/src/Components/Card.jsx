import profile from '../assets/react.svg';
import '../CSS/Card.css';
const Card=()=>{
    return(
        <div className='card'>
            <img src={profile} />
            <div className='text'>
                <h3>Name</h3>
                <p>last message...!</p>
            </div>
        </div>
    )
}
export default Card;