import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { updateuserPassword } from "../feature/userAuth/forgetpasswordSlice";
import { useDispatch } from "react-redux";
type Inputs = {
  email: string;
  password: string;
  confirmpassword: string;
  status: string;
  isLoggedIn: boolean;
};
export default function ForgetPassword() {
  const dispatch = useDispatch<any>();
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<Inputs>();

  const formData = async (data: Inputs) => {
    const value = {
      ...data,
    };
    dispatch(updateuserPassword(value));
    reset();
  };
  return (
    <div className="bg-[url('./login-background.jpg')] bg-center bg-cover">
      <div className="md:container md:mx-auto flex justify-center items-center h-screen ">
        <div className="columns-2xl border-color: rgb(107 114 128); md:w-6/12 h-fit sm:w-12 lg:w-6/12 xl:w-6/12 2xl:w-6/12">
          <form className="w-full h-fit p-5" onSubmit={handleSubmit(formData)}>
            <div className="py-2 flex flex-col justify-center align-middle gap-4 relative">
              <label
                className="text-white text-md font-semibold"
                htmlFor="email"
              >
                Email*
              </label>
              <input
                className="p-3 focus:outline-none"
                type="email"
                placeholder="Enter Your Email Address"
                {...register("email", { required: true })}
              />
              <p className="absolute top-28 w-full text-center font-semibold text-red-600">
                {errors.email && <span>This field is required</span>}
              </p>
            </div>
            <div className="py-2 flex flex-col justify-center align-middle gap-4 relative">
              <label
                className="text-white text-md font-semibold"
                htmlFor="email"
              >
                Password*
              </label>
              <input
                className="p-3 focus:outline-none"
                type="password"
                placeholder="Enter Your Password"
                {...register("password", { required: true })}
              />
              <p className="absolute top-28 w-full text-center font-semibold text-red-600">
                {errors.email && <span>This field is required</span>}
              </p>
            </div>
            <div className="py-2 flex flex-col justify-center align-middle gap-4 relative">
              <label
                className="text-white text-md font-semibold"
                htmlFor="email"
              >
                Confirm Password*
              </label>
              <input
                className="p-3 focus:outline-none"
                type="password"
                placeholder="Confirm Password"
                {...register("confirmpassword", {
                  validate: (match) => {
                    const password = getValues("password");
                    return match === password || "Passwords should match!";
                  },
                })}
              />
              <p className="absolute top-28 w-full text-center font-semibold text-red-600">
                <span>{errors.confirmpassword?.message}</span>
              </p>
            </div>
            <div className="flex justify-between mt-5">
              <p className="cursor-pointer">
                <Link to="/register">Don't have an account ?</Link>
              </p>
              <p className="cursor-pointer">
                {" "}
                <Link to="/">Login ?</Link>
              </p>
            </div>
            <div className="text-center">
              <button className="w-full bg-[#255f95cf] mt-9 p-3 text-white uppercase font-semibold">
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
