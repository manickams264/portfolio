import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Projects from "./pages/Projects"
import WebLayout from "./layouts/WebLayout"
import Profile from "./pages/profile"
import Contact from "./pages/contact"
const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<WebLayout/>}>
                        <Route path="/" element={<Profile/>} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Route>
                </Routes>

            </BrowserRouter>
        </>
    )
}

export default App