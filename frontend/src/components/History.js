import React, { useState, useEffect } from 'react';

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Gantilah dengan endpoint backend Anda
    fetch('http://localhost:5000/api/absensi/1') // Misalnya userId 1
      .then((res) => res.json())
      .then((data) => setHistory(data))
      .catch((err) => console.error('Error fetching data: ', err));
  }, []);

  return (
    <div>
      <h1>Riwayat Absensi</h1>
      <ul>
        {history.map((item) => (
          <li key={item.id}>
            {item.waktuAbsensi} - {item.status} ({item.metode})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
