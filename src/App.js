import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/Main.js';
import Login from './pages/Login.js';


function App() {
    const REST_API_KEY = process.env.REACT_APP_JAVASCRIPT_API_KEY;
    const REDIRECT_URI = "http://localhost:3000/login";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
   

  return (
    <div className="App">
        <BrowserRouter>
                <div> say hellow</div>
                    <h1><a href={KAKAO_AUTH_URL}>LOGIN</a></h1>
            <Routes>
                
                <Route path="/" element={<Main/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
