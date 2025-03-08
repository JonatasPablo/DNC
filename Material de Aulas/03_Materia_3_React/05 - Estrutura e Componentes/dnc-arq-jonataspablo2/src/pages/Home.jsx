import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";

function Home(){
    return(
        <>
            <Header/>
            <h1>Home</h1>
            <p>Welcome to the main page</p>
            <Button buttonStyle='outline'>Olá</Button>
            <Footer/>
        </>
    )
}

export default Home;