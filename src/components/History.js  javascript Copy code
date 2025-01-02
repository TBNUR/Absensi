import React, { useState, useEffect } from 'react';

const History = () => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        fetch('/api/absensi/1') // Ganti dengan userId dinamis
            .then((res) => res.json())
            .then((data) => setHistory(data))
            .catch((err) => console.error(err));
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
