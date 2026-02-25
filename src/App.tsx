// import { BrowserRouter, Route,Routes, } from 'react-router-dom';
// import './App.css'
// import { Home } from './Home/page';
// import { About } from './about/page';
// import { Contact } from './contact/page';
// import { Blog } from './blog/page';
// //import { Route} from 'react-router-dom';

// function App() {

//  return(
//   <BrowserRouter>
//   <Routes>
//     <Route path="/" element={<Home />} />
//      <Route path="/about" element={<About />} />
//       <Route path="/contact " element={<Contact />} />
//       <Route path="/blog" element={<Blog />} />    
//         </Routes>
//        <div>Hello World!</div>
//       </BrowserRouter>
//    );
// }
// export default App;
 
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './Home/page'
import { About } from './about/page'
import { Contact } from './contact/page'
import { Blog } from './blog/page'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  )
}

export default App