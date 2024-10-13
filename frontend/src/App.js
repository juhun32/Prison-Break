import Header from "./Header";
import Footer from "./Footer";
import "./App.css";
import Prisonernum from "./Prisonernum";
import Prisonerspend from "./Prisonerspend";

const App = () => {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //     const fetchPosts = async () => {
  //         const response = await axios.get('http://127.0.0.1:8000/api/posts/');
  //         setPosts(response.data);
  //     };
  //     fetchPosts();
  // }, []);

  return (
    <div className="App">
      <Header />
      <main>
        {/* <section>
                    <h2>Posts</h2>
                    <ul>
                        {posts.map(post => (
                            <li key={post.id}>
                                <h3>{post.title}</h3>
                                <p>{post.content}</p>
                            </li>
                        ))}
                    </ul>
                </section> */}
        <section class="intro" id="home">
          <div class="intro--div">
            <h1 class="intro--text--head">Prison Break!</h1>
            <h3 class="intro--text">
              Redirect the Dollars: Invest in Rehabilitation, Not Just
              Operations. It's Time to Fund Justice that Heals.
            </h3>
            {/* <div>
              <a href="#projects" class="btn">
                Projects
              </a>
            </div> */}
          </div>
        </section>

        <section class="section--about" id="information">
          <h2 class="about--title">WELCOME TO PRISON BREAK!</h2>
          <h3 class="missionstatement">Mission Statement</h3>
          <p>TBD</p>
          <h3 class="visionstatement">Vision Statement</h3>
          <p>
            At Prison Break, we aim to uncover the true costs of the prison
            system and advocate for reforms that promote transparency, safety,
            and rehabilitation. We believe that informed communities can drive
            meaningful change.
          </p>
        </section>

        <section class="section--maps" id="maps">
          <h2 class="section__title section__title--academics">Maps</h2>

          <div class="map">
            <p class="prisonernum">
              <Prisonernum />
            </p>

            <p class="prisonerspend">
              <Prisonerspend />
            </p>
          </div>
        </section>

        <section class="section--maps" id="maps">
                
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
