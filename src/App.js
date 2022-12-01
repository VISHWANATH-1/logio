import './App.css';
import { BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import Home from './Component/Home';
import Login from './Component/Login';
import RegistrationForm from './Component/RegistrationForm';
import Welcome from './Component/Welcome';

function App() {


  return (
    <>
    <Welcome/>
    <BrowserRouter>
   <Routes><Route exact path="/" element={<Home />} /></Routes>
   <Routes><Route exact path="/home" element={<Home />} /></Routes>
   <Routes><Route exact path="/welcome" element={<Welcome/>} /></Routes>
   <Routes><Route exact path="/login" element={<Login />} /></Routes>
   <Routes><Route exact path="/signup" element={<RegistrationForm />} /></Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
