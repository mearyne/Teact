import Home from "./pages/Home"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import About from "./pages/About"
import Counter from "./pages/Counter"
import Info from "./hook/info";

function App() {
    return (
        <div className="App">
            {/*<BrowserRouter>*/}
            {/*    <nav>*/}
            {/*        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/counter">Counter</Link>*/}
            {/*    </nav>*/}
            {/*    <Routes>*/}
            {/*        <Route path="/" element={<Home />} />*/}
            {/*        <Route path="/about" element={<About />} />*/}
            {/*        <Route path="/counter" element={<Counter />} />*/}
            {/*    </Routes>*/}
            {/*</BrowserRouter>*/}

            <Info />
        </div>
    )
}


export default App
