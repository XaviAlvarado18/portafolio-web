import React,{Suspense,lazy} from "react";
import Header from "./components/Navbar/Header";
import Loader from "./components/loader";


const Home = lazy(() => import("./layouts/Home"));

const App =()=>(
    <>
    <div className='app'>
        <Suspense
            fallback={
                <Loader />
            }
        >
            <Home/>
        </Suspense>
    </div></>
);

export default App;