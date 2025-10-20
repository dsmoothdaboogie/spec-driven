import React from 'react';
import { useState } from 'react';

export default function Builder() {
  const [url, setUrl] = useState('http://localhost:4000/echo');
  const [method, setMethod] = useState('GET');
  const [resp, setResp] = useState<any>(null);

  async function send() {
    const body = method === 'GET' ? undefined : '';
    const r = await fetch('/proxy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ method, url, headers: {}, body })
    });
    setResp(await r.json());
  }

  return (
    <section>
      <input placeholder="URL" value={url} onChange={e => setUrl(e.target.value)} data-testid="url-input" />
      <select value={method} onChange={e => setMethod(e.target.value)} data-testid="method-select">
        <option>GET</option><option>POST</option><option>PUT</option><option>DELETE</option>
      </select>
      <button onClick={send} data-testid="send-btn">Send</button>
      <pre data-testid="resp-pre">{resp ? JSON.stringify(resp, null, 2) : ''}</pre>
    </section>
  );
}
