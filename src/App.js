import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import AxiosRequest from './components/AxiosExample';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <AxiosRequest />
      </header>
    </div>
  );
}

export default App;
