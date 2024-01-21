import profile from '../assets/react.svg';
import '../CSS/Card.css';
const Card=({userId})=>{
    console.log(userId)
    return(
         <div className='card'>
         <img src={profile} />
         <h3>{userId}</h3>
        
         </div>   
    )
}
export default Card;