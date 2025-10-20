import React, { useEffect, useState } from 'react';

type Order = { id: string; item: string; qty: number };

export function App() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [item, setItem] = useState('');
  const [qty, setQty] = useState(1);

  useEffect(() => {
    fetch('/api/orders').then(r => r.json()).then(setOrders);
  }, []);

  const create = async () => {
    const res = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item, qty })
    });
    if (res.status === 201) {
      const o = await res.json();
      setOrders(prev => [...prev, o]);
      setItem(''); setQty(1);
    } else {
      const err = await res.json();
      alert('Create failed: ' + (err.error || res.status));
    }
  };

  return (
    <main style={{ fontFamily: 'system-ui', padding: 16 }}>
      <h1>Spec-Driven Starter UI</h1>
      <section>
        <h2>Create Order</h2>
        <input placeholder="Item" value={item} onChange={e => setItem(e.target.value)} />
        <input type="number" min={1} value={qty} onChange={e => setQty(parseInt(e.target.value || '1', 10))} />
        <button onClick={create}>Create</button>
      </section>
      <section>
        <h2>Orders</h2>
        <ul>{orders.map(o => <li key={o.id}>{o.item} × {o.qty}</li>)}</ul>
      </section>
    </main>
  );
}
