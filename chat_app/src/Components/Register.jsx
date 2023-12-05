export default function Register()
{
       return(
      <>
      <div>
        <form>
                <input type='text' placeholder="FirstName"/>
                <hr></hr>
                <input type="text"   placeholder="LastName"/>
                <hr></hr>
                <input type="email" placeholder="Enter Your Mail"/>
                <hr></hr>
                <input type="password"  placeholder="Enter PassWord"/>
                <hr></hr>
                <input type="password" placeholder="Confirm PassWord" />
                <hr></hr>
        </form>
      </div>
      </>
       );
}