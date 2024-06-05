import { useContext, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import loginImg from "/src/assets/images/login.jpg"
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'


export const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    console.log('state in the location login page', location.state)

    const handleLogin = (e) => {
        e.preventDefault();
    
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        console.log(email, password);
        signIn(email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          Swal.fire({
            title: 'User Login Successful.',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        });
        navigate(from, { replace: true });
  
    })
}
    return (
        <div>
      <div className=" h-screen flex flex-col md:flex-row mx-auto justify-center items-center animate__animated animate__jackInTheBox rounded-none"
      > 
      <div>
        <img src={loginImg}  className="max-w-xl"alt="" />
        </div>      
        <div className="hero rounded-none">
          
          <div className="card shrink-0 w-full max-w-md shadow-2xl bg-white rounded-none">
            <h2 className="text-2xl font-bold text-center text-black py-4">
              Login your Account
            </h2>
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black font-bold">
                    Email address
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered bg-gray-100 text-black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text  text-black font-bold">
                    Password
                  </span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered bg-gray-100  text-black w-full"
                    required
                  />
                  <span
                    className="absolute top-5 right-3"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FiEyeOff></FiEyeOff> : <FiEye></FiEye>}
                  </span>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn  btn-primary">LOGIN</button>
              </div>
              <p className="text-black text-sm">
                Do not have an account?
                <Link className="text-red-500 font-bold" to="/register">
                  {" "}
                  Register
                </Link>
              </p>
            </form>
            <div className="flex items-center pt-4 space-x-1">
              <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
              <p className="px-3 text-sm text-gray-400">
                Login with social accounts
              </p>
              <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
            </div>
            

           
          </div>
        </div>
      </div>
    </div>
    );
    }

export default Login;