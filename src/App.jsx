import { useState } from 'react'
import './App.css'

function App() {
  const [clicked, setClicked] = useState(false)

  return (
    <div className="app">
      <div className="container">
        <div className="hero">
          <h1 className={`title ${clicked ? 'clicked' : ''}`}>
            Hello, World! 🌍
          </h1>
          <p className="subtitle">
            Welcome to your beautiful React + Vite application
          </p>
          <button 
            className="cta-button"
            onClick={() => setClicked(!clicked)}
          >
            {clicked ? 'Thanks! ✨' : 'Click Me! 🚀'}
          </button>
        </div>
        
        <div className="features">
          <div className="feature-card">
            <div className="icon">⚡</div>
            <h3>Lightning Fast</h3>
            <p>Powered by Vite for instant development</p>
          </div>
          <div className="feature-card">
            <div className="icon">⚛️</div>
            <h3>React Powered</h3>
            <p>Built with the latest React features</p>
          </div>
          <div className="feature-card">
            <div className="icon">🎨</div>
            <h3>Beautiful Design</h3>
            <p>Modern and responsive interface</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
