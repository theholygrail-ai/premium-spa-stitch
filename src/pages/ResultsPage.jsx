import { Link } from 'react-router-dom'

function ResultsPage() {
  return (
    <main className="page-main">
      <section className="section">
        <p className="eyebrow">Proof of Transformation</p>
        <h1>Results & Testimonials</h1>
        <p className="muted max">Measured outcomes and verified founder stories from private clients.</p>
      </section>

      <section className="cards section">
        <article className="card">
          <h3>Marcus Vane, CEO</h3>
          <p className="muted">Freedom restored with a rebuilt operating system and clean delegation map.</p>
        </article>
        <article className="card">
          <h3>Elena Rossi, Founder</h3>
          <p className="muted">Precision strategy and one strategic shift that re-opened growth velocity.</p>
        </article>
        <article className="card">
          <h3>James Whitaker, Investor</h3>
          <p className="muted">400% ROI in the first 90 days after execution cycles were tightened.</p>
        </article>
      </section>

      <section id="case-study" className="section cta-band">
        <h2>Read Full Case Study</h2>
        <p className="muted">Deep-dive breakdown of pipeline, offer architecture, and implementation cadence.</p>
        <Link className="btn btn-primary" to="/apply#book">
          Book Call
        </Link>
      </section>
    </main>
  )
}

export default ResultsPage
