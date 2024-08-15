import React from "react";
import "./about.css";
import CountUp from "react-countup";
import Footer from "./footer";

const About = () => {
  return (
    <>
      <section className="About-wrapper">
        <video autoPlay muted loop className="background-video">
          <source
            src="https://videos.pexels.com/video-files/2098873/2098873-hd_1920_1080_30fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
<<<<<<< HEAD
        <div className="About-container">
          <div className="About-title">
            <h1>
              Discover Your Ideal
              <br /> Companion for
              <br />
              Pet Care and Adoption
            </h1>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div className="count">
            <h1>#AdoptLoveCare campaign</h1>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div className="About-desc">
            <span>
              Give a loving home to a furry friend who’s waiting for you.
            </span>
            <br></br>
            <span>
              Find your perfect companion and start your journey together today.
            </span>
          </div>
          <br></br>
          <br></br>
          <h1>TO VISIT BLUE CROSS</h1>
          <a
            href="https://bluecrossofindia.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="blue-cross-link"
          >
            Blue Cross
          </a>
          <br />
          <br />
          <a
            href="https://forms.gle/rFm3u4ptYsrjMpfh8"
            className="feedback-link"
          >
            <button className="feedback-button">Feedback</button>
          </a>
=======
        <div className="paddings innerWidth flexCenter About-container">
          <div className="flexColStart About-left">
            <div className="About-title">
              <div className="circle" />
              <div className="f-circle" />
              <div className="s-circle" />
              <h1>
                Find your <br /> paw-perfect
                <br />
                friend
              </h1>
            </div>
            <div className="count">
              <br />
              <br />
              <h1>#AdoptLoveCare campaign</h1>
            </div>
            <div className="flexColStart About-desc">
              <span>Gift a home to the cutest paws of your choice.</span>
              <span>Bring home your tail-trail partner.</span>
            </div>
            <br />
            <br />
            <h1>TO VISIT BLUE CROSS</h1>
            <a
              href="https://bluecrossofindia.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="blue-cross-link"
            >
              Blue Cross
            </a>
            <br />
            <br />
            <a
              href="https://forms.gle/rFm3u4ptYsrjMpfh8" /* Replace with actual feedback form URL */
              className="feedback-link"
            >
              <button className="feedback-button">Feedback</button>
            </a>
          </div>
>>>>>>> 25878366038e0948ccec78c42f66448fc5c77caa
        </div>
        <div className="flexCenter About-right"></div>
      </section>

      <div className="stats">
        <div className="stat">
          <span>
            <CountUp start={1000} end={9000} duration={2.75} />
            <span>+</span>
          </span>
          <p className="text">pets adopted</p>
        </div>
        <div className="stat">
          <span>
            <CountUp start={1000} end={6000} duration={2.75} />
            <span>+</span>
          </span>
          <p className="text"> paw-tnerships</p>
        </div>
        <div className="stat">
          <span>
            <CountUp start={100} end={1000} duration={4} />
            <span>+</span>
          </span>
          <p className="text"> Lives Connected</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;