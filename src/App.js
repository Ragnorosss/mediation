
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
