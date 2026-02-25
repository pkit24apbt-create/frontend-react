import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './Home/page'
import { About } from './about/page'
import { Contact } from './contact/page'
import { Blog } from './blog/page'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f9f9f9',
        minHeight: '100vh',
        color: '#333',
      }}
    >
      {/* Top Navbar */}
      <header
        style={{
          backgroundColor: '#007bff',
          padding: '15px 20px',
        }}
      >
        <nav
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
          }}
        >
         <Link
            to="/"
            style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}
          >
            Home
          </Link>
          <Link
            to="/about"
            style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}
          >
            About
          </Link>
          <Link
            to="/contact"
            style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}
          >
            Contact
          </Link>
          <Link
            to="/blog"
            style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}
          >
           Blog
          </Link>
        </nav>
      </header>

      {/* Page Content */}
      <main style={{ padding: '20px 0' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
         <footer
        style={{
          textAlign: 'center',
          padding: '15px 0',
          color: '#777',
          backgroundColor: '#f1f1f1',
          marginTop: 'auto',
        }}
      >
        &copy; 2026 My Portfolio
      </footer>  
    </div>
  )
}

export default App