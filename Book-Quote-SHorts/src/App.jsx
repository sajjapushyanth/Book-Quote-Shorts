import React, { useEffect, useState } from "react";
import axios from "axios";
import QuotePlayer from "./components/QuotePlayer";
import { sampleQuotes } from "./data/sampleQuotes";

import "./index.css"; // global styles
import "./App.css";   // component-specific styles
export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    axios
      .get("http://localhost:5000/api/quotes")
      .then((res) => {
        if (mounted) {
          setQuotes(res.data);
          setLoading(false);
        }
      })
      .catch(() => {
        if (mounted) {
          setQuotes(sampleQuotes);
          setLoading(false);
        }
      });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="app-container">
      {/* Header */}
      <header>
        <h1>Book Quote Shorts</h1>
        <p>Quick snippets from your favorite books ✨</p>
      </header>

      {/* Main */}
      <main>
        {loading ? (
          <div className="loading">Loading…</div>
        ) : (
          <QuotePlayer quotes={quotes} />
        )}
      </main>

      {/* Footer */}
      <footer>
        Made by Sajja Pushyanth
      </footer>
    </div>
  );
}
