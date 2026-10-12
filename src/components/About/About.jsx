
import './About.css'

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <img
          className="about__avatar"
          src="/images/about.jpg"
          alt="Laptop and mouse on a desk beside a plant"
        />

        <div className="about__content">
          <h2 className="about__title">About the author</h2>

          <p className="about__text">
            I'm a mechanical engineering graduate with a background
            in problem-solving, analytical thinking, and software
            development.
          </p>

          <p className="about__text">
            Through TripleTen's software engineering program, I've
            developed experience building web applications using
            JavaScript, React, Node.js, and Express. NewsExplorer is
            a project that brings those skills together.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
