import Img from "/src/assets/portfolio.png";
import CLoneImg from "/src/assets/searchengine.png"
import flectImg from "/src/assets/flectstore.png"
import CarentImg from "/src/assets/carrent.png"
const UseProjectData = () => {
    const projects =[
        {
        img: Img,
        tools:"FIGMA HTML CSS3 REACTJS NETLIFY",
        project_name:"Portfolio",
        notes:"You're currently using it",
        github:"https://github.com/Naijabunner/portfolio",
        live:"https://burnacodesportfolio.netlify.app"
    },
        {
        img: flectImg,
        tools:"FIGMA HTML CSS3 REACTJS NETLIFY",
        project_name:"FLect Stores ",
        notes:"Modern Smart Watch E-commerce Website",
        github:"https://github.com/Naijabunner/Flect-stores",
        live:"" 
    },
        {
        img:CarentImg ,
        tools:"FIGMA HTML CSS3 REACTJS SWIPERJS NETLIFY",
        project_name:"Carent",
        notes:"Car Rental Single Page Application",
        github:"https://github.com/Naijabunner/car-rent",
        live:"https://carent-bunner-dev.netlify.app/"
    },
        {
        img: CLoneImg,
        tools:"FIGMA HTML CSS3 REACTJS NETLIFY",
        project_name:"Portfolio",
        notes:"You're currently using it",
        github:"https://github.com/Naijabunner/cloneapp",
        live:"https://bunnersearchclngogg.netlify.app/"
    },]
    return ( projects );
}
 
export default UseProjectData;