import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function ApplyPage() {
  const [formData, setFormData] = useState({ name: '', email: '', objective: '' })
  const [sent, setSent] = useState(false)
  const navigate = useNavigate()

  const canSubmit = useMemo(
    () => formData.name.trim() && formData.email.trim() && formData.objective.trim(),
    [formData],
  )

  const onFieldChange = (event) => {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (!canSubmit) return
    setSent(true)
  }

  return (
    <main className="page-main apply-page">
      <section id="book" className="section">
        <p className="eyebrow">Inquiry Portal</p>
        <h1>Book Discovery Call</h1>
        <p className="muted max">Direct access to curated guidance. We manually review each application.</p>
      </section>

      <section className="section apply-grid">
        <form className="card" onSubmit={onSubmit}>
          <label>
            Full Name
            <input name="name" value={formData.name} onChange={onFieldChange} placeholder="John Doe" />
          </label>
          <label>
            Email
            <input name="email" type="email" value={formData.email} onChange={onFieldChange} placeholder="contact@example.com" />
          </label>
          <label>
            Objective
            <textarea
              name="objective"
              value={formData.objective}
              onChange={onFieldChange}
              rows={4}
              placeholder="Describe your current trajectory"
            />
          </label>
          <button type="submit" className="btn btn-primary" disabled={!canSubmit}>
            Execute Inquiry
          </button>
          {sent && <p className="success">Application received. Our concierge team will reply shortly.</p>}
        </form>

        <aside className="card">
          <h3>Direct Channels</h3>
          <p className="muted">concierge@elitecurator.io</p>
          <p className="muted">+41 44 123 45 67</p>
          <div className="cta-row">
            <button type="button" className="btn btn-ghost" onClick={() => navigate(-1)}>
              Exit Application
            </button>
            <Link className="btn btn-ghost" to="/programs#flagship">
              View Programs
            </Link>
          </div>
        </aside>
      </section>
    </main>
  )
}

export default ApplyPage
