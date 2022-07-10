import logo from "./assets/logo.svg";
import Header from "./components/Header";
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <Header logo={logo} />
      <Profile userName="KindEni" />
    </div>
  );
}

export default App;
