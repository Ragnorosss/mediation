import About from "pages/About";
import Main from "pages/Main";
import { Route,Routes } from "react-router-dom";
import "style/_styles.scss"

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<About/>}></Route>
                <Route path="/main" element={<Main/>}></Route>
            </Routes>
        </div>
    );
}
    
export default App;
