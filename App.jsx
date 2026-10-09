import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    course: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  return (
    <main className="page">
      <div className="container">
        <h1>Controlled React Form</h1>

        <form>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            type="email"
          />
          <input
            name="course"
            value={form.course}
            onChange={handleChange}
            placeholder="Enter your course"
          />
        </form>

        <div className="preview">
          <h2>Entered Information</h2>
          <p><strong>Name:</strong> {form.name || "—"}</p>
          <p><strong>Email:</strong> {form.email || "—"}</p>
          <p><strong>Course:</strong> {form.course || "—"}</p>
        </div>
      </div>
    </main>
  );
}

export default App;
