import './styles/App.css';
import './styles/flex.scss';
import './styles/main.scss';
import pepeImage from './pepe.jpeg';
import navLeftSvg from './logo.svg';
import pc from './hero.svg';
import end from './frontend.svg';
import book from './book.svg';
import boginoo from './boginoo.png';
import instaclone from './instaclone.png';
import storage from './storage.png';
import instalogo from './instagramlogo.svg';
import facebooklogo from './facebooklogo.svg';
import twitterlogo from './twitterlogo.svg';
import {scroller} from 'react-scroll';

function App() {

  const scroll = (section) => {
    console.log(section);
    scroller.scrollTo(section, {
      duration: 400,
      delay: 0,
      smooth: "easeInOutQuart"
    })
  }

  return (
    <div className="cont flex-col">
      <section className="content">
        <div className="nav flex-row justify-between">
          <img alt="navleft" className="nav-left" src={navLeftSvg} />
          <div className="nav-right flex-row">
            <button onClick={() => scroll("about")} className="point">About</button>
            <button onClick={() => scroll("skills")} className="point">Skills</button>
            <button onClick={() => scroll("projects")} className="point">Projects</button>
          </div>
        </div>
      </section>
      <section className="content about-section flex-col items-center">
        <h1>
          Bichih ym olhooroo bichne.
        </h1>
        <h2>
          I code beautifully simple things, and I love what I do.
        </h2>
        <img alt="pepe" src={pepeImage} style={{ borderRadius: "100%", width: '200px', height: '200px', marginTop: '2%', marginBottom: '4%' }} />
        <img alt="pc" src={pc} />
      </section>
      <section className="about flex justify-center items-center">
        <div id="intro" style={{ marginBottom: "10%" }}>
          <h1 className="flex justify-center">Hi, I’m Orgil. Nice to meet you.</h1>
          <h3>Since beginning my journey as a programmer 16 months ago, I've done remote work for myself and collaborated with talented people to create digital projecs. I'm naturally curious, and perpetually working on improving my chops one problem at a time.</h3>
        </div>
      </section>
      <section className="skills">
        <div className="flex flex-col items-center">
          <img alt="frontandbackend" src={end} />
          <h3>Front-end and Back-end</h3>
          <p className="skills-font">I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
          <span className="skills-font">Languages I use:</span>
          <p className="skills-font">HTML, CSS, JavaScript, ReactJS, SASS</p>
          <span className="skills-font">Tools:</span>
          <ul>
            <li>Atom</li>
            <li>Bitbucket</li>
            <li>Bootstrap</li>
            <li>Bulma</li>
            <li>Codekit</li>
            <li>Codepen</li>
            <li>Github</li>
            <li>Gitlab</li>
            <li>Terminal</li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <img alt="book" src={book} />
          <h3>Problem solving</h3>
          <p>enend muu tul bichih ym baihgu</p>
        </div>
      </section>
      <section className="projects">
        <h1>
          My recent Works.
        </h1>
        <h2>
          Here are a few projects I've worked on recently.
        </h2>
        <div className="flex justify-between">
          <img alt="icture" src={boginoo} />
          <img alt="pictur" src={instaclone} />
          <img alt="picure" src={storage} />
        </div>
      </section>
      <section className="footer flex justify-center items-center flex-col">
        <h1>
          Living, learning, & leveling up one day at a time.
        </h1>
        <div className="w-8 flex justify-between">
          <button onClick={() => window.location.href="https://www.instagram.com/orgilodkhuu/"}><img alt="ilogo" src={instalogo}/></button>
          <button onClick={() => window.location.href="https://www.facebook.com/orgil.odkhuu.75"}><img alt="flogo" src={facebooklogo}/></button>
          <button onClick={() => window.location.href="https://twitter.com/lobeve1"}><img alt="tlogo" src={twitterlogo}/></button>
        </div>
        <h6>Made with ReactJS</h6>
      </section>
    </div>
  );
}

export default App;
