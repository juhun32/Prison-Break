import Header from "./Header";
import Footer from "./Footer";
import Rotateboard from "./Rotateboard";
import "./App.css";
import Prisonernum from "./Prisonernum";
import Prisonerspend from "./Prisonerspend";
import Rotatecitation from "./Rotatecitation";
import Graph from "./Graph";
import Team from "./Team";

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
          <h2 class="about--title">
            <strong>WELCOME TO PRISON BREAK!</strong>
          </h2>
          <h3 class="missionstatement">Mission Statement</h3>
          <p>
            At Prison Break, we aim to create a more efficient, transparent
            system that prioritizes fair penalties, minimizes taxpayer burden,
            and limits time spent for low-severity offenses.We believe that
            informed communities can drive meaningful change.
          </p>
          <h3 class="visionstatement">Vision Statement</h3>
          <p>
            We envision a future where the true costs of the prison system are
            transparent, and reforms prioritize safety, rehabilitation, and
            justice. By empowering communities with knowledge, we aim to foster
            a more informed society capable of driving meaningful, lasting
            change in the criminal justice system.
          </p>
          <h3 class="teamintro">Team Introduction</h3>
          <Team />
        </section>

        <section class="section--maps" id="statistics">
          <h2 class="maps--title">Statistics / Maps</h2>

          <div class="map">
            <p class="prisonernum">
              <Prisonernum />
            </p>

            <p class="prisonerspend">
              <Prisonerspend />
            </p>
          </div>
          <p class="priosnernum">
            <Graph />
          </p>
        </section>

        {/* <section class="section--services" id="service">
          <h2 class="services--title">Service</h2>
        </section> */}

        <section class="section--resources" id="resource">
          <h2 class="resources--title">Resource</h2>
          <div class="resources--content">
            <p class="quote--text">
              <Rotateboard />
            </p>
            <p class="citation--text">
              <Rotatecitation />
            </p>
          </div>
          <div class="more">
            <h3>Price of Prisons: What Incarceration Costs Taxpayers</h3>
            <li>
              Higher Total Costs:{" "}
              <p>
                The total taxpayer costs of prisons in certain U.S. states were
                13.9% higher than reflected in the states' corrections budgets.
              </p>{" "}
            </li>
            <li>
              Actual Costs:{" "}
              <p>
                While corrections budgets totaled $33.6 billion, the true cost
                to taxpayers was $39 billion, an additional $5.4 billion.
              </p>
            </li>{" "}
            <li>
              Main Cost Drivers:
              <ul>
                <li>
                  Underfunded contributions to retiree health care for
                  corrections employees: $1.9 billion.
                </li>
                <li>
                  State contributions to retiree health care: $837 million.
                </li>
                <li>
                  Employee benefits (e.g., health insurance): $613 million.
                </li>
                <li>
                  Capital costs: $485 million. Hospital and health care for
                  inmates: $335 million.
                </li>
                <li>Underfunded pension contributions: $304 million.</li>
              </ul>
            </li>
            <li>Balancing Cost and Safety:</li>
            <p>
              States should not focus solely on reducing per-inmate spending, as
              lower costs can lead to poorer outcomes in terms of safety and
              recidivism.
            </p>{" "}
            <p>
              <li>
                Cost-Saving Measures:{" "}
                <p>
                  Effective strategies include modifying sentencing and release
                  policies, reducing recidivism, and improving prison
                  operational efficiency.{" "}
                </p>
              </li>
              <li>
                Report Advice:{" "}
                <p>
                  It is critical to ensure that prisons remain safe, secure, and
                  humane, despite the high costs involved.
                </p>
              </li>{" "}
              <li>
                Appended Content:{" "}
                <p>
                  The report includes a methodology and a survey on state prison
                  costs.
                </p>
              </li>{" "}
              <h3>U.S Department of Treasury</h3>
              <li>Internal Revenue Service (IRS) website</li>
              <li>IRS Forms and Publications </li>
              <li>Refund Status IRS Withholding Calculator </li>
              <li>Foreign Account Tax Compliance Act </li>
              <h3>Prison Policy Initiative.</h3>
              <li>
                The U.S. has the highest incarceration rate in the world, with
                every state surpassing the rates of nearly all independent
                democracies. Even states like Massachusetts, which appear
                progressive, rank higher than countries like Iran or Colombia.
                Louisiana, Mississippi, and Oklahoma lead with the highest
                rates, while Virginia’s rate is significantly above the U.S.
                average.
              </li>
              <li>
                This pattern shows that the U.S. relies excessively on
                incarceration as a response to crime, a practice not driven by
                actual crime rates, but by public perceptions of violence.
                Compared to other nations, U.S. states align more closely with
                authoritarian countries or those with internal conflicts,
                despite having lower violent crime rates.
              </li>
              <li>
                Incarceration in the U.S. disproportionately impacts various
                populations, including women, who make up 30% of the world’s
                incarcerated female population. The data shows that the
                country's high incarceration rates aren't a rational response to
                crime, but a result of punitive policies that have developed
                over decades. Despite talk of reform, changes remain
                insufficient to align U.S. incarceration practices with other
                democracies.
              </li>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
