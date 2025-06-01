import { useEffect, useState } from 'react';
import styles from './App.module.css';

export default function App() {
  const [apod, setApod] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/apod')
      .then((res) => res.json())
      .then((data) => setApod(data))
      .catch((err) => console.error("APOD fetch failed:", err));
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>🚀 NASA Astronomy Picture of the Day</h1>

      {apod ? (
        <div className={styles.card}>
          <h2 className={styles.title}>{apod.title}</h2>
          <p className={styles.date}>{apod.date}</p>
          {apod.media_type === "image" ? (
            <img src={apod.url} alt={apod.title} className={styles.image} />
          ) : (
            <iframe
              src={apod.url}
              title={apod.title}
              width="100%"
              height="500"
              frameBorder="0"
              allowFullScreen
              style={{ borderRadius: '1rem', marginBottom: '1.5rem' }}
            ></iframe>
          )}
          <p className={styles.explanation}>{apod.explanation}</p>
        </div>
      ) : (
        <div className={styles.loader}>Fetching stardust…</div>
      )}
    </div>
  );
}
