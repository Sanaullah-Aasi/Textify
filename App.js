import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  let toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("DarkMode has been Enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("LightMode has been Enabled", "success");
    }
  }

  return (
    <>
      <Router>
        <Navbar title="Editify" about="About Editify" Mode={Mode} togglemode={toggleMode} />
        <Alert Alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<TextForm showalert={showAlert} Mode={Mode} />} />
            <Route path="/"about element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;
