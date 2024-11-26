import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Header from './components/Header';

function App() {
  return (
    <>
      <BrowserRouter>
      <div className='container'>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
