import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useRevealAnimations } from '../animation/gsap/useRevealAnimations'
import HeroAmbientScene from '../three/HeroAmbientScene'

function HomePage() {
  const scopeRef = useRef(null)
  useRevealAnimations(scopeRef)

  return (
    <main ref={scopeRef}>
      <section className="hero">
        <div className="hero-copy hero-reveal">
          <p className="eyebrow">The Standard of Excellence</p>
          <h1>
            The <em>Metamorphosis</em> of Success.
          </h1>
          <p className="muted max">
            Precision-engineered strategies for elite individuals who refuse to settle for plateaus.
          </p>
          <div className="cta-row">
            <Link className="btn btn-primary" to="/apply#book">
              Book Discovery Call
            </Link>
            <Link className="btn btn-ghost" to="/programs#flagship">
              Start Program
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <HeroAmbientScene />
        </div>
      </section>

      <section className="stats reveal-on-scroll">
        <article>
          <h2>$15M+</h2>
          <p>Revenue Generated</p>
        </article>
        <article>
          <h2>1,200</h2>
          <p>Lives Optimised</p>
        </article>
        <article>
          <h2>14</h2>
          <p>Global Keynotes</p>
        </article>
      </section>

      <section id="method" className="section reveal-on-scroll">
        <p className="eyebrow">The Methodology</p>
        <h2>The Pillars of Elite Performance</h2>
        <div className="cards stagger-cards">
          <article className="card">
            <h3>Psychological Clarity</h3>
            <p className="muted">Deconstruct limiting narratives and architect a bulletproof mindset.</p>
          </article>
          <article className="card">
            <h3>Strategic Leverage</h3>
            <p className="muted">Implement systems that work while you are offline.</p>
          </article>
          <article className="card">
            <h3>Infinite Growth</h3>
            <p className="muted">Continuous refinement through data-driven feedback loops.</p>
          </article>
        </div>
      </section>

      <section className="section cta-band reveal-on-scroll">
        <h2>Your Next Era Awaits</h2>
        <p className="muted">Spaces are limited and application reviewed manually.</p>
        <Link className="btn btn-primary pulse" to="/apply#book">
          Apply Now
        </Link>
      </section>
    </main>
  )
}

export default HomePage
