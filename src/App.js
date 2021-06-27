import './App.css';
import { handleDropDownNavMenu } from './utils'

import { Header } from './components/Header';
import { Homepage } from './components/Homepage';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
