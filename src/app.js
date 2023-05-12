import React,{Suspense,lazy} from "react";
import Header from "./components/Navbar/Header";
import Loader from "./components/loader";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme/theme";


const Home = lazy(() => import("./layouts/Home"));

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
            </Suspense>
        </div>
    </ChakraProvider>
    </>
);

export default App;