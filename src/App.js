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
import Gameinfo from './Components/Gameinfo';
import Inotebook from './Components/Inotebook';
import Analyzecsv from './Components/Analyzecsv';

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
          <Route exact path="/gameinfo" element={<Gameinfo/>}></Route>
          <Route exact path="/inotebook" element={<Inotebook/>}></Route>
          <Route exact path="/analyzecsv" element={<Analyzecsv/>}></Route>
        </Routes>
      </HashRouter>

      
      
      
      
      
      </div>
      
      

      
      
    </>
  );
}

export default App;
