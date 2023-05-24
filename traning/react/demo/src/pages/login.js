import { useNavigate } from 'react-router-dom';

const Login=()=>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    // let nav= useNavigate();
    return(
    <>
    <div>
      <h1>login</h1>
      <label>Email</label>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required/>
        <label>password</label>
        <input
          type="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required/>
      {/* <button onClick={()=> nav('signup')}>button </button> */}
    </div>
    </>
)}

export default Login;