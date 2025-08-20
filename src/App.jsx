
import './App.css'

function App() {

  return (
    <>
      <header class="navbar">
        <div class="navbar-brand">
            <span class="logo-icon">⭐</span>
            <span class="logo-text">Aletheia Toolkit</span>
        </div>
        <nav class="navbar-nav">
            <a href="#" class="nav-link active">Home</a>
            <a href="#" class="nav-link">About</a>
            <a href="#" class="nav-link">Modules</a>
            <a href="#" class="nav-link">Progress</a>
        </nav>
    </header>

    <main class="hero-section">
        <h1 class="hero-headline">Mastering Digital Realities: Your AI Detection Toolkit</h1>
        <h2 class="hero-subheadline">Welcome to Aletheia: Learn to confidently distinguish genuine content from AI-generated media.</h2>
        <p class="hero-paragraph">
            Artificial intelligence is rapidly advancing, now creating remarkably convincing text, images, audio, and video. The Aletheia Toolkit is your essential guide, providing the vital knowledge and practical skills to confidently identify AI-generated content and navigate the digital landscape with enhanced accuracy and security.
        </p>
        <p class="hero-paragraph">
            Simply click 'Let's get started!' to embark on an engaging learning experience. Our four comprehensive modules, filled with interactive challenges and assessments, will equip you to detect AI-generated content with precision and confidence.
        </p>
        <button class="cta-button">Let's get started!</button>
    </main>
    </>
  )
}

export default App
