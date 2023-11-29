import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import "../styles/Login.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const navigate = useNavigate();
  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      const { email, password } = values;
      console.log(values);
      try {
        const response = await axios.post(
          "http://localhost:3000/auth/login",
          {
            email,
            password,
          },
          { withCredentials: true }
        );
        toast.success(response.data.message);
        setTimeout(() => {
          navigate("/home");
        }, 3000);
      } catch (error: unknown) {
        toast.error("Something went wrong, please try again later");
      }
    },
  });

  return (
    <div className="container">
      <div className="card">
        <div className="left-section">
          <h2>Welcome to QuillQuest</h2>
          <p> Please Login to your Account.</p>
          <form onSubmit={formik.handleSubmit}>
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
            <span>
              <a href="#">Forgotten Password?</a>
            </span>
            <button type="submit" className="btn btn-login">
              Login
            </button>
          </form>
          <span>
            Not signed up? Create a new account{" "}
            <Link to="/register">here.</Link>
          </span>
        </div>
        <div className="right-section"></div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
