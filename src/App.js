import logo from './logo.svg';
import './App.css';
import PrimerComponente from "./PrimerComponente";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PrimerComponente />

      </header>
    </div>
  );
}

export default App;
