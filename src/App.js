import './App.css';
import Navbar from './components/Navbar/Navbar';
import MainLayout from './containers/main-layout/MainLayout';
import {
  BrowserRouter as Router
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <MainLayout />
    </Router>
  );
}

export default App;
