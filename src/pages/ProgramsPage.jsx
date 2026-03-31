import { Link } from 'react-router-dom'

function ProgramsPage() {
  return (
    <main className="page-main">
      <section className="section">
        <p className="eyebrow">Signature Pathways</p>
        <h1>Programs</h1>
        <p className="muted max">Choose the depth of your evolution, from sprint implementation to year-long advisory.</p>
      </section>

      <section className="cards section" id="flagship">
        <article className="card card-feature">
          <p className="eyebrow">Flagship</p>
          <h3>The Sovereign Council</h3>
          <p className="muted">A private 12-month mastermind for founders scaling to 9-figures.</p>
          <Link className="btn btn-primary" to="/apply#book">
            Apply to Join
          </Link>
        </article>
        <article className="card">
          <p className="eyebrow">Intensive</p>
          <h3>The 90-Day Sprint</h3>
          <p className="muted">Rapid deployment of high-performance frameworks for immediate impact.</p>
          <Link className="btn btn-ghost" to="/apply#book">
            Enroll Now
          </Link>
        </article>
        <article className="card">
          <p className="eyebrow">Self-Paced</p>
          <h3>Systems Architecture Vault</h3>
          <p className="muted">SOPs, hiring workflows, and automation frameworks from a $10M operator stack.</p>
          <Link className="btn btn-ghost" to="/results#case-study">
            View Details
          </Link>
        </article>
      </section>
    </main>
  )
}

export default ProgramsPage
