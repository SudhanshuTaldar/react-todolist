// import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import {Footer} from './MyComponents/Footer';
import Todos from './MyComponents/Todos';

function App() {
  const jii=44;
  return (
    <>
      <Header title="Todos List"/>
      <Todos/>
      <Footer/>
    </>
  );
}

export default App;
