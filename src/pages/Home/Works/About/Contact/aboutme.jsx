import Navbar from "../../../../../components/Navbar";
const Aboutcomp = () => {
  return (
    <>
      <Navbar currentPage="about" />
      <div className="wrapper">
        <div className="header">
          <h2>
            {" "}
            <span>/</span>about-me
          </h2>
          <p>Who am i?</p>
        </div>
        <div className="home_about_desc">
          <p>Hello, I'm Daniel!</p>
          <p>
            I am a self-taught front-end developer based in Lagos, passionate
            about crafting engaging and user-centric digital experiences. My
            journey into the world of web development began with a genuine
            curiosity and a commitment to mastering the art of creating visually
            stunning and intuitive interfaces.
          </p>
          <p>
            With a primary focus on ReactJS, I have honed my skills in this
            powerful JavaScript library, utilizing its capabilities to build
            dynamic and responsive user interfaces. I take pride in my
            proficiency in leveraging React's component-based architecture to
            create scalable and efficient web applications.
          </p>
          <p>
            In addition to ReactJS, I have immersed myself in a variety of
            frontend tools and technologies. From styling with CSS preprocessors
            like Sass to managing state with Redux, and ensuring seamless user
            interactions through the use of tools like Webpack, my expertise
            extends across the entire spectrum of front-end development.
          </p>
          <p>
            Living and working in Lagos, I draw inspiration from the vibrant
            tech community and the dynamic digital landscape. I am dedicated to
            staying abreast of the latest industry trends and best practices,
            ensuring that I deliver cutting-edge solutions that not only meet
            but exceed the expectations of clients and users alike.
          </p>
          <p>
            As a self-motivated and continuously learning individual, I am
            excited about contributing to the ever-evolving field of web
            development, bringing creativity and innovation to each project I
            undertake.
          </p>
        </div>
        <div className="aboutme_skills">
        <h2><span>#</span>skills </h2>
        <div className="skill_box_wrapper">
                <div className="skill_box_one">
                    <div className="skill_box">
                        <h4>Languages</h4>
                        <p>Javascript</p>
                    </div>
                </div>
                <div className="skill_box_two">
                        <div className="skill_box">
                            <h4>Databases</h4>
                            <p>Mongo</p> 
                        </div>
                        <div className="skill_box">
                            <h4>other</h4>
                            <p>Html Css</p>
                        </div>
                </div>
                <div className="skill_box_three">
                    <div className="skill_box">
                        <h4>Tools</h4>
                        <p>Vscode figma Git GitHub Font-Awesome Sliderjs</p>
                    </div>
                    <div className="skill_box">
                    <h4>Frameworks</h4>
                        <p>Reactjs</p>
                    </div>
                </div>
                </div>
                <div className="other_skills">
                <h2><span>#</span>Special skills </h2>
                            <div className="skillboxes">
                                <div className="Skillbox">
                                    <p><span>Communication</span> Fluent in english, with great skills in breakdowns.</p>
                                </div>
                                <div className="Skillbox">
                                    <p><span>Problem-solving</span> Decode complexity to smart solutions.</p>
                                </div>
                                <div className="Skillbox">
                                    <p><span>critical Thinking</span>  Evaluate options, decide, build smartly.</p>
                                </div>
                                <div className="Skillbox">
                                    <p><span>Teamwork</span> Collaborate, code, achieve greatness together..</p>
                                </div>
                                <div className="Skillbox">
                                    <p><span>Adaptability</span> Embrace change, learn, stay cutting-edge.</p>
                                </div>
                                <div className="Skillbox">
                                    <p><span>Time Management</span> Plan, code, deliver, repeat with precision.</p>
                                </div>
                                <div className="Skillbox">
                                    <p><span>Empathy</span> Code with users' feelings in mind.</p>
                                </div>
                                <div className="Skillbox">
                                    <p><span>Creativity</span> Innovate code, craft unique solutions.</p>
                                </div>
                                <div className="Skillbox">
                                    <p><span>Attention to Detail </span> Code: error-free, pixel-perfect, user-approved.</p>
                                </div>
                                <div className="Skillbox">
                                    <p><span>Self-Motivation </span> Passion fuels code that excels always.</p>
                                </div>
                                
                            </div>
                </div>
        </div>
               

      </div>
    </>
  );
};

export default Aboutcomp;
