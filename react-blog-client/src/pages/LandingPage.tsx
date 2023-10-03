import LandingPageNavigation from "../components/Landing Page/atoms/LandingPageNavigation";
import LandingPageFooter from "../components/Landing Page/molecules/LandingPageFooter";
import "../styles/landingPage.scss";
import img from "../assets/idea.jpg";
import BlogService from "../components/Landing Page/atoms/BlogService";
// import { GoogleMap } from "@react-google-maps/api";
import {useNavigate} from 'react-router-dom'

const LandingPage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <section className="nav_section">
        <LandingPageNavigation />
      </section>

      <section className="explore_section">
        <h1>Discover Inspiring Ideas</h1>
        <p>Explore a world of creativity and innovation at IdeaStream Blog.</p>
        <button onClick={() => navigate('/create-user')}>Explore</button>
      </section>

      <section className="about">
        <img src={img} alt={img} />
        <div>
          <h2>About IdeaStream Blog</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
            possimus quidem nostrum minima ad veniam debitis dignissimos nisi
            placeat ipsum, excepturi eos quibusdam est provident laboriosam
            adipisci deleniti dolores perferendis officia aliquam dolorum sed!
            Quia soluta voluptate vel similique fuga laborum et impedit, ea quae
            a accusamus quasi cum necessitatibus temporibus aliquid! Voluptates,
            quis molestias adipisci numquam repellendus nulla deserunt fugit
            quae! Adipisci veniam unde beatae, a enim eum quos aliquid molestias
            fuga at reiciendis aspernatur animi natus earum magni, commodi culpa
            blanditiis tempore nulla facilis corporis, omnis cupiditate deserunt
            id.
          </p>
        </div>
      </section>

      <section className="services">
        <h1>Our Services</h1>

        <div>
          <BlogService
            imgUrl="https://picsum.photos/id/0/5000/3333"
            title="Content Creation"
            desc="We create engaging content that resonates with your audience and makes them come back for more"
          />
          <BlogService
            imgUrl="https://picsum.photos/id/1/5000/3333"
            title="Content Creation"
            desc="We create engaging content that resonates with your audience and makes them come back for more"
          />
          <BlogService
            imgUrl="https://picsum.photos/id/2/5000/3333"
            title="Content Creation"
            desc="We create engaging content that resonates with your audience and makes them come back for more"
          />
        </div>
      </section>

      {/* <section>
        <GoogleMap/>
      </section> */}

      <section className="contact">
        <div>
          <h2>Contact us today</h2>
          <p>
            Connect with us through our contact form and let us help you achieve
            your goals. We are dedicated to providing exceptional service and
            support to all our clients
          </p>
        </div>

        <form action="">
          <label htmlFor="name">Full Name</label>
          <input id="name" placeholder="Enter your full name" type="text" />

          <label htmlFor="email">Email Address</label>
          <input type="email" placeholder="John.Doe@email.com" />
          <label htmlFor="message">Message</label>
          <input name="message" id="message"  placeholder="Message"></input>

          <button>Send</button>
        </form>
      </section>

      <LandingPageFooter />
    </div>
  );
};

export default LandingPage;
