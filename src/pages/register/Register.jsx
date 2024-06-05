import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import registerImg from "/src/assets/images/register.jpg"

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleRegister = (e) => {
        e.preventDefault();
    
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");
        console.log(email, password, name, photo);
    }
    return (
        <div>
      <div className="h-screen flex gap-1 items-center my-10 animate__animated animate__jackInTheBox">
        <div className="">
            <img src={registerImg} className="max-w-2xl" alt="" />
        </div>
        <div className="hero ">
          <div className="card shrink-0 md:w-2/3 shadow-2xl bg-white rounded-none">
            <h2 className="text-2xl font-bold text-center text-black py-4">
              Register your Account
            </h2>
            <form className="card-body" onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black font-bold">
                    Your name
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered bg-gray-100  text-black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black font-bold">
                    Your Photo
                  </span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter your photo"
                  className="input input-bordered bg-gray-100  text-black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black font-bold">
                    Email address
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered bg-gray-100  text-black"
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

              <div className="flex">
                <label className="flex gap-2 cursor-pointer">
                  <input type="checkbox" className="checkbox border" required />
                  <span className="text-sm font-bold">
                    Accept Term & Conditions
                  </span>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-info  text-white">Register</button>
              </div>
              <p className="text-black text-sm">
                Already have an account?
                <Link className="text-red-500 font-bold" to="/login">
                  {" "}
                  Login
                </Link>
              </p>
            </form>
            
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;