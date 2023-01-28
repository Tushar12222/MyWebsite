import './App.css';
import Blockchain from './Components/Blockchain';
import Navbar from './Components/Navbar';
import PhonenumberApi from './Components/PhonenumberApi';
import TextUTils from './Components/TextUTils';
import Todoapp from './Components/Todoapp';
import TodoWebapp from './Components/TodoWebapp';
import YoutubeSpotifyInstagram from './Components/Youtube-Spotify-Instagram';
import { HashRouter , Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import Newsapp from './Components/Newsapp';

function App() {
  return (
    <>
      <div style={{backgroundColor: "grey"}}>
      
      <HashRouter>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/todoapp" element={<Todoapp/>}></Route>
          <Route exact path="/todowebapp" element={<TodoWebapp/>}></Route>
          <Route exact path="/blockchain" element={<Blockchain/>}></Route>
          <Route exact path="/phnoapi" element={<PhonenumberApi/>}></Route>
          <Route exact path="/ysiuis" element={<YoutubeSpotifyInstagram/>}></Route>
          <Route exact path="/textutils" element={<TextUTils/>}></Route>
          <Route exact path="/newsapp" element={<Newsapp/>}></Route>
        </Routes>
      </HashRouter>

      
      
      
      
      
      </div>
      
      

      
      
    </>
  );
}

export default App;
