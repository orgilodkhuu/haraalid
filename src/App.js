import './App.css';
import './styles/flex.scss';
import pepeImage from './pepe.jpeg';
import navLeftSvg from './mf-logo.svg';
import pc from './hero.svg';

function App() {
  return (
    <div className="cont flex-col">
      <section className="content">
        <div className="nav flex-row justify-between">
          <img className="nav-left" src={navLeftSvg} />
          <div className="nav-right flex-row">
            <div className="point">About</div>
            <div className="point">Skills</div>
            <div className="point">Projects</div>
          </div>
        </div>
      </section>
      <section className="content about-section flex-col items-center">
        <h1>
          Designer, Front-end Developer & Mentor
        </h1>
        <h2>
          I design and code beautifully simple things, and I love what I do.
        </h2>
        <img src={pepeImage} style={{ borderRadius: "100%", width: '200px', height: '200px', marginTop: '2%', marginBottom: '4%' }} />
        <img src={pc} />
      </section>
      <section className="about">

      </section>
    </div>
  );
}

export default App;
