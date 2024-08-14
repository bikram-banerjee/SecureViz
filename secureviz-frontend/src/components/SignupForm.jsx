import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import axios from "axios";

export const SignupForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post(BACKEND_URL + "/users/signup", data)
      .then(async (response) => {
        if (response.status == 200) {
          console.log(response.data);
          localStorage.setItem("isLoggedIn", true)
          navigate("/dashboard");
          return;
        }
    })
    .catch((error) => {
        if (error.response) {                   //there was a response but with bad status code
            alert(error.response.data.msg);
            return
        } else if (error.request) {             //request was made but no response (ex network error)
            alert(error.message);
            return;
        } else {
            alert(error.message)           //some other error
            return
        }
      });
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center place-items-center bg-gradient-to-r from-custom-dark to-custom-dark-light bg-transparent">
    <form className="flex flex-col justify-center place-items-center" onSubmit={handleSubmit(onSubmit)}>
      <div className="p-10 flex flex-col gap-6 bg-white rounded-xl">
        <h1 className="font-bold text-slate-950 text-center text-3xl sm:text-4xl md:text-5xl">Admin Signup</h1>
        <h3 className="text-slate-950 text-sm sm:text-base text-center">Already have an account? <Link to="/signin" className="underline pl-1">Login</Link></h3>
        <div className="flex flex-col sm:gap-2 gap-1 text-sm sm:text-base">
          <label className="font-semibold text-slate-950" htmlFor="email">First Name: </label>
          <input className="px-5 py-2 rounded-md border shadow-sm" name="email" type="text" placeholder="John" {...register("first_name")}/>
          {errors.email && <div className="text-red-500">{errors.email.message}</div>}
        </div>
        <div className="flex flex-col sm:gap-2 gap-1 text-sm sm:text-base">
          <label className="font-semibold text-slate-950" htmlFor="email">Last Name: </label>
          <input className="px-5 py-2 rounded-md border shadow-sm" name="email" type="text" placeholder="Doe" {...register("last_name")}/>
          {errors.email && <div className="text-red-500">{errors.email.message}</div>}
        </div>
        <div className="flex flex-col sm:gap-2 gap-1 text-sm sm:text-base">
          <label className="font-semibold text-slate-950" htmlFor="email">Username: </label>
          <input className="px-5 py-2 rounded-md border shadow-sm" name="username" type="email" placeholder="johndoe@gmail.com" {...register("uemail")}/>
          {errors.username && <div className="text-red-500">{errors.username.message}</div>}
        </div>
        <div className="flex flex-col sm:gap-2 gap-1 text-sm sm:text-base">
          <label className="font-semibold text-slate-950" htmlFor="email">Password: </label>
          <input className="px-5 py-2 rounded-md border shadow-sm" name="password" type="password" placeholder="Password" {...register("upass")}/>
          {errors.password && <div className="text-red-500">{errors.password.message}</div>}
        </div>
        <button className="bg-slate-950 shadow-md text-white px-3 py-2 rounded-lg text-base hover:bg-slate-950 ease-in duration-300 hover:scale-105 mt-4" type="submit">
          {
            isSubmitting ?
            "Loading..." :
            "Submit" 
          }
        </button>
        {errors.root && <div className="text-red-500">{errors.root.message}</div>}
      </div>
    </form>
    </div>
  );
};
