import Navbar from "../../../../../components/Navbar";

const Contactcomp = () => {
    return ( <>
    <Navbar currentPage = "contact"/>
    <div className="wrapper">
        <div className="header">
            <h2> <span>/</span>contact</h2>
            <p>Get in touch...</p>
        </div>
        <div className="box">
            <p>Your feedback is invaluable to me, as it helps me refine my skills and deliver
                 better solutions. If you're looking for a passionate and skilled
                  front-end web app developer to join your team or collaborate on a project,
                   don't hesitate to reach out. Let's work together to create innovative and
                    impactful digital experiences.</p>
                    <div className="contact_box">
            <div>
            <p>Message me here</p>
          <a href="https://wa.me/8130806204" target="blank"><i className="fa-brands fa-whatsapp"></i>+234 813 080 6204</a>
            <a href="mailto:Okechukwudaniel12@gmail.com" target="blank"><i className="fa-regular fa-envelope"></i>Okechukwudaniel12@gmail.com</a>
            <a href="www.linkedin.com/in/okechukwudaniel" target="blank"><i className="fa-brands fa-linkedin-in"></i>@Daniel Okechukwu</a>    
            </div>
            

        </div>
        </div>
    </div></> );
}
 
export default Contactcomp;