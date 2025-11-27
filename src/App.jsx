import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import AvinashAssistant from "./components/AvinashAssistant";
import Experience from "./components/Experience";
import PortfolioBackground from "./components/PortfolioBackground"; // <-- updated import
import Cursor from "./components/Cursor";

function App() {
    return (
        <div className="font-serif relative min-h-screen overflow-x-hidden text-white bg-black">
            {/* Persistent animated background */}
            <PortfolioBackground />
            <Cursor />

            {/* All your main content */}
            <div className="relative z-10">
                <NavBar />
                <Home />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
                <Footer />
                <AvinashAssistant />
            </div>
        </div>
    );
}

export default App;
