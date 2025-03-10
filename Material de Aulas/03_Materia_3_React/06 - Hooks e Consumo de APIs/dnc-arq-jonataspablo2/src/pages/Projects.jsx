import Header from "../components/Header/Header";
import ProjectsList from "../components/ProjectsList/ProjectsList";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";

function Projects(){
    return(
        <>
            <Header/>
            <Banner title='Projects' image='Projects.jpg'/>
            <div className="container">
                <ProjectsList/>
            </div>            
            <Footer/>
        </>
    )
}

export default Projects;