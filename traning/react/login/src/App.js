import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from "./pages/Login";
import Home from "./pages/home";


const App=()=>(
    <BrowserRouter>
     <Routes>
        <Route path='' element={<Login/>}></Route>
        <Route path='home' element={<Home/>}></Route>
     </Routes>
    </BrowserRouter>
  )

export default App;