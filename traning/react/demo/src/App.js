import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from "./pages/login";
import Signup from "./pages/signup";


const App=()=>(
    <BrowserRouter>
     <Routes>
        <Route path='login' element={<Login/>}></Route>
        <Route path='' element={<Signup/>}></Route>
     </Routes>
    </BrowserRouter>
  )

export default App;