import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Dapp from './Pages/Dapp';
import Generate from './Pages/Generate';
import Home from './Pages/Home';
import MarketPlace from './Pages/MarketPlace';
import Profile from './Pages/Profile';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/profile" element={<Profile/>}/>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/generate" element={<Generate/>}/>
          <Route exact path="/dapp" element={<Dapp/>}/>
          <Route exact path="/nft-market" element={<MarketPlace/>}/>
         
        
        
        </Routes>
    </Router>
    </>
  );
}

export default App;
