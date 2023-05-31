import React,{Suspense,lazy} from "react";
import Header from "./components/Navbar/Header";
import Loader from "./components/loader";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme/theme";


const Home = lazy(() => import("./layouts/Home"));
const About = lazy(() => import("./layouts/about"));
const Skills = lazy(() => import("./layouts/Skills"));
const Projects = lazy(() => import("./layouts/Projects"));

const App =()=>(
    <>
    <ChakraProvider theme={theme}>
        <div className='app'>
            <Suspense
                fallback={
                    <Loader />
                }
            >
                <Home/>
                <About/>
                <Skills />
                <Projects/>
            </Suspense>
        </div>
    </ChakraProvider>
    </>
);

export default App;