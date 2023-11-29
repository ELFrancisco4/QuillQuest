import "../styles/Signup.scss";
import quillquest from "../assets/images/QuillQuest.jpeg";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupSchema = Yup.object().shape({
  authorName: Yup.string().required("Author Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="signup-card">
        <div className="left">
          <h2> QuillQuest Sign Up Page</h2>
          <p> Create a new Account</p>

          <Formik
            initialValues={{ authorName: "", email: "", password: "" }}
            validationSchema={SignupSchema}
            onSubmit={async (values) => {
              console.log(values);
              const { authorName, email, password } = values;
              try {
                const response = await axios.post(
                  "http://localhost:3000/auth/register",
                  {
                    authorName,
                    email,
                    password,
                  }
                );
                toast.success(response.data.messsage);
                navigate("/interests");
              } catch (error: unknown) {
                toast.error("User creation failed, try again later");
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field
                  type="text"
                  name="authorName"
                  placeholder="Author Name"
                />
                <ErrorMessage name="authorName" component="div" />

                <Field type="text" name="email" placeholder="Email" />
                <ErrorMessage name="email" component="div" />

                <Field type="password" name="password" placeholder="Password" />
                <ErrorMessage name="password" component="div" />

                <button
                  className="btn btn-login"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Sign Up
                </button>
              </Form>
            )}
          </Formik>

          <p className="or-separator">OR</p>
          <span className="google-signup">
            Sign Up with Google
            <FcGoogle />
          </span>
          <span>
            Already have an account? Login <Link to="/login">here.</Link>
          </span>
        </div>
        <div className="right">
          <img src={quillquest} alt="quillquest" />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
