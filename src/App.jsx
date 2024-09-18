import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Homepage from './components/Homepage/home';
import Shop from './components/Shop/shop';
import Navbar from './components/Navbar/nav';
import Sidebar from './components/Sidebar/side';
import Blogs from './components/Blogs/blogs';
function App() {
  return (
    <Router>
       {/* <Navbar isVisible={true}  />
       <Sidebar isVisible={true}  /> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/blog" element={<Blogs />} />

      </Routes>
    </Router>
  );
}

export default App;