
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Project from "../components/Project";
import Skills from "../components/Skills";
import Timeline from "../components/Timeline";
function App() {

    
    return (
        <div className="bg-darkColor font-inter">
            <Header/>
            <Hero/>
            <About/>
            <Skills/>
            <Project/>
            <Timeline/>
            <Contact/>
            <Footer/>
        </div>
    );
}
export default App;
