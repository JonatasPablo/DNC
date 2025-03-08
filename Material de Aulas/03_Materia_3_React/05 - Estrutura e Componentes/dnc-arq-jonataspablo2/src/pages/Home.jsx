import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import ProjectsList from "../components/ProjectsList/ProjectsList";
import Footer from "../components/Footer/Footer";
// import Button from "../components/Button/Button";
// import Banner from "../components/Banner/Banner";


function Home(){
    return(
        <>
            <Header/>
            <div className="container">
                <Hero/>
                <ProjectsList/>
            </div>            
            {/* <Banner title='Home' image='About.jpg'/> */}
            {/* <Button buttonStyle="primary" arrow>Olá!</Button> */}
            <Footer/>
        </>
    )
}

export default Home;