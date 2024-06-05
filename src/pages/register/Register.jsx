import { useContext, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import registerImg from "/src/assets/images/register.jpg"
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from 'sweetalert2'
const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser,updateUserProfile } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const onSubmit = data => {


        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                console.log(data)
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        reset()
                        // create user entry in the database
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'User created successfully.',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/');
                        })

            
        })
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
            <form  onSubmit={handleSubmit(onSubmit)} className="card-body" >
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black font-bold">
                    Your name
                  </span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
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
                  {...register("photoURL", { required: true })}
                  name="photoURL"
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
                  {...register("email", { required: true })}
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
                    {...register("password", {
                        required: true,
                        minLength: 6,
                        maxLength: 20,
                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                    })}
                    name="password"
                    placeholder="password"
                    {...errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {...errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {...errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {...errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>
                            }
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
                 <input className="btn btn-primary" type="submit" value="Sign Up" />
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