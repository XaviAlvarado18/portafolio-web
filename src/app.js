import React,{Suspense,lazy} from "react";
import Header from "./components/Navbar/Header";
import Logo from "./components/Navbar/Logo";
import Loader from "./components/loader";

const App =()=>(
    <>
    <div className='app'>
        <Suspense
            fallback={
                <Loader />
            }
        >
            <Header>
                <h1>Título del encabezado</h1>
                <p>Descripción del encabezado</p>
            </Header>
                <Logo open={true} />
        </Suspense>
    </div></>
);

export default App;