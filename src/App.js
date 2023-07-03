import './App.css';

import Choose from './components/Choose';
import Join from './components/Join';
import Market from './components/Market';
import Navbar from './components/Navbar';
import Theme from './components/Theme';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Theme />
      <Market />
      <Choose />
      <Join />
    </div>
  );
}

export default App;
