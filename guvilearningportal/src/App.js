//import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Home from './components/homes';

import Footer from './components/footer';
import Learn from './components/home';import {Container} from 'react-bootstrap';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Login from './components/screen/login';
import Signup from './components/screen/signup';
import Course from './components/Course'
import CoursesState from './components/context/coursesState'
import Admin from './components/screen/Admin';
import EnrollScreen from './components/screen/EnrollScreen';
import Profile from './components/screen/profile';

function App() {
  return (
    <>
    <CoursesState>
          <BrowserRouter>
    <Header/>
     
    <main>
      <Container>
        <Routes>
        <Route path="/" element={<Home/>} extact></Route>
     
        <Route path="/learning" element={<Learn/>} extact></Route>
        <Route path="/signup" element={<Signup/>} extact></Route>
        <Route path="/login" element={<Login/>} extact></Route>
        <Route path="/course/:id" element={<Course/>} extact></Route>
        <Route path="/admin" element={<Admin/>} extact></Route>
        <Route path="/enroll/:id" element={<EnrollScreen/>} extact></Route>
        <Route path="/profile" element={<Profile/>} extact></Route>
        
        </Routes>
      </Container>
      </main>   
    
    
    </BrowserRouter>
    <Footer/>
   </CoursesState>
    </>
  );
}

export default App;
