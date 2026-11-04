import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="app-main">
        <Home />
      </main>
    </div>
  );
}

export default App;
