import './App.css';
import { handleDropDownNavMenu } from './utils'

import { Header } from './components/Header';

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'


// library.add(fab, faCheckSquare, faCoffee);

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
