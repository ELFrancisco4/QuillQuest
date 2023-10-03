import LoginForm from "../components/Login/atoms/LoginForm"
import img from '../assets/abstract.jpg'
import '../styles/loginPage.scss'
const LoginPage = () => {
  return (
    <div className="login_page">
        <section>
            <img src={img} alt={img} />
        </section>
        <section>
            <LoginForm/>
        </section>
    </div>
  )
}

export default LoginPage