
import Burna from "/src/assets/Myimg02.jpeg"
import Dots from "/src/assets/Dots.png";

const Homeabout = () => {
  return (
    <>
      <div className="homeProjects_wrapper">
        <div className="homeProjects_head">
          <div className="homeProjects_head_one">
            <h2>
              <span>#</span>About{" "}
            </h2>
            <p id="line_design"></p>
          </div>
        </div>
        <div className="home_about_desc_wrapper">
          <div className="home_about_desc">
            <p>Hello, I'm Daniel!</p>
            <p>
              I am a self-taught front-end developer based in Lagos, passionate
              about crafting engaging and user-centric digital experiences. My
              journey into the world of web development began with a genuine
              curiosity and a commitment to mastering the art of creating
              visually stunning and intuitive interfaces.
            </p>
            <p>
              With a primary focus on ReactJS, I have honed my skills in this
              powerful JavaScript library, utilizing its capabilities to build
              dynamic and responsive user interfaces. I take pride in my
              proficiency in leveraging React's component-based architecture to
              create scalable and efficient web applications.
            </p>
            <p>
            In addition to ReactJS, I have immersed myself in a variety of frontend tools and technologies. 
            From styling with CSS preprocessors like Sass to managing state
             with Redux, and ensuring seamless user interactions through 
             the use of tools like Webpack, my expertise extends across
              the entire spectrum of front-end development.
            </p>
          </div>
          <div className="herp_img_wrapper">
            <img src={Burna} alt="Daniel" className="profilepic" />
            
            <img src={Dots} alt="Dots" className="dots1"/>
            <img src={Dots} alt="Dots" className="dots2"/>
        </div>
        </div>
      </div>
    </>
  );
};

export default Homeabout;
