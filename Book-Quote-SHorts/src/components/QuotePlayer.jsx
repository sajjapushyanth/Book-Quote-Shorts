import React, { useEffect, useRef, useState } from "react";

export default function QuotePlayer({ quotes = [] }) {
  const [index, setIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(false);
  const [likedIds, setLikedIds] = useState([]);
  const transitionRef = useRef(null);

  const next = () => setIndex((i) => (i + 1) % quotes.length);
  const prev = () => setIndex((i) => (i - 1 + quotes.length) % quotes.length);

  const toggleLike = (id) => {
    setLikedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const shareMock = (q) => {
    alert(`Sharing: ${q.text} — ${q.author}`);
  };

  useEffect(() => {
    const el = transitionRef.current;
    if (!el) return;
    el.classList.remove("opacity-100", "translate-y-0");
    void el.offsetWidth;
    el.classList.add("opacity-100", "translate-y-0");
  }, [index]);

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [autoplay, index]);

  if (!quotes.length) {
    return <div className="text-center text-gray-400">No quotes available</div>;
  }

  const q = quotes[index];

  return (
    <>
    <div className="controls">
  <button onClick={prev} className="control-btn">◀</button>
  <button onClick={() => setAutoplay(a => !a)} className="play-btn">
    {autoplay ? "Pause" : "Play"}
  </button>
  <button onClick={next} className="control-btn">▶</button>
</div>

<div
  ref={transitionRef}
  onClick={next}
  className={`quote-card ${index ? "show" : ""}`}
>
  <p>“{q.text}”</p>
  <p>— {q.author} · <i>{q.book}</i></p>
</div>

<div className="actions">
  <button
    onClick={() => toggleLike(q.id)}
    className={`like-btn ${likedIds.includes(q.id) ? "liked" : ""}`}
  >
    ♥ {likedIds.includes(q.id) ? "Liked" : "Like"}
  </button>
  <button onClick={() => shareMock(q)} className="share-btn">Share</button>
  <div>{index + 1} / {quotes.length}</div>
</div>

<div className="dots">
  {quotes.map((_, i) => (
    <button
      key={i}
      onClick={() => setIndex(i)}
      className={i === index ? "active" : ""}
    />
  ))}
</div>

    </>
  );
}
