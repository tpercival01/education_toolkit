import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <section className="hero-container card-container">
      <div className="hero-text-content">
        <h1 className="hero-headline">Aletheia: Unveiling Truth in the Digital Age</h1>
        <h2 className="hero-subheadline">Your Beacon to Spot AI-Generated Content. Explore, Learn, Discover!</h2>
        <p className="hero-paragraph">
          Artificial intelligence is rapidly advancing, now creating remarkably convincing text, images, audio, and video. The Aletheia Toolkit is your essential guide, providing the vital knowledge and practical skills to confidently identify AI-generated content and navigate the digital landscape with enhanced accuracy and security.
        </p>
        <p className="hero-paragraph">
          Simply click 'Let's get started!' to embark on an engaging learning experience. Our four comprehensive modules, filled with interactive challenges and assessments, will equip you to detect AI-generated content with precision and confidence.
        </p>
        <Link to="/modules" className="cta-button">Let's get started!</Link>
      </div>
    </section>
  );
}

export default HomePage;