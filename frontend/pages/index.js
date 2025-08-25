export default function Home() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>CVBoost AI 🚀</h1>
      <p>Welcome! This will be your AI CV & Cover Letter Generator.</p>
      <form method="POST" action="https://cvboost-backend.onrender.com/generate">
        <textarea name="details" placeholder="Paste your career details here" rows="6" cols="50" />
        <br /><br />
        <button type="submit">Generate CV</button>
      </form>
    </div>
  )
}
