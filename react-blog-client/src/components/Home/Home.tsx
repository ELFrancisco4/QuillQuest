import Nav from "../NavBar/Nav";
import Article from "../Blog/molecules/Article";
import "./home.scss";
import SidePanel from "../SidePanel/molecules/SidePanel";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="home">
        <section className="feed_section">
          <Article
            img_url="https://picsum.photos/200/300/?blur"
            author="Harry Kane"
            category="Hacking"
            content="jhedsbfjsdjvjsfdvkjsbjsbvjsdvbsdbvsdjkvbj ackhabvkjdskjbbjsvdbkdjdskjbjkvkjsbvjwhhsdbvjbsjkvbjksdbvbsjvjkdbskjskhdvbsdvksdbkjvbskbvskjjskdkjdvbkjsbvkjsbvkjsosusbjkdsnvvipsdvdidsbvlbuinvsdsdkjbdsklnvbkjsnkzdbsdzdklvnsdsdkvbjknsdlivnsjvbjvweuoivsoivskbvkjdsbvjkbvkj"
            date="Sept 24"
            title="An in depth study of killing jiggas"
            article_img="https://picsum.photos/seed/picsum/200/300"
          />
          <Article
            img_url="https://picsum.photos/200/300/?blur"
            author="Harry Kane"
            category="Hacking"
            content="jhedsbfjsdjvjsfdvkjsbjsbvjsdvbsdbvsdjkvbj ackhabvkjdskjbbjsvdbkdjdskjbjkvkjsbvjwhhsdbvjbsjkvbjksdbvbsjvjkdbskjskhdvbsdvksdbkjvbskbvskjjskdkjdvbkjsbvkjsbvkjsosusbjkdsnvvipsdvdidsbvlbuinvsdsdkjbdsklnvbkjsnkzdbsdzdklvnsdsdkvbjknsdlivnsjvbjvweuoivsoivskbvkjdsbvjkbvkj"
            date="Sept 24"
            title="An in depth study of killing jiggas"
            article_img="https://picsum.photos/seed/picsum/200/300"
          />
          <Article
            img_url="https://picsum.photos/200/300/?blur"
            author="Harry Kane"
            category="Hacking"
            content="jhedsbfjsdjvjsfdvkjsbjsbvjsdvbsdbvsdjkvbj ackhabvkjdskjbbjsvdbkdjdskjbjkvkjsbvjwhhsdbvjbsjkvbjksdbvbsjvjkdbskjskhdvbsdvksdbkjvbskbvskjjskdkjdvbkjsbvkjsbvkjsosusbjkdsnvvipsdvdidsbvlbuinvsdsdkjbdsklnvbkjsnkzdbsdzdklvnsdsdkvbjknsdlivnsjvbjvweuoivsoivskbvkjdsbvjkbvkj"
            date="Sept 24"
            title="An in depth study of killing jiggas"
            article_img="https://picsum.photos/seed/picsum/200/300"
          />
        </section>

        <section className="side_panel_section">
            <SidePanel/>
        </section>
      </div>
    </>
  );
};

export default Home;
