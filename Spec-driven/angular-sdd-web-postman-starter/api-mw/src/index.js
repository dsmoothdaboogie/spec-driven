import express from 'express';
import fetch from 'node-fetch';

const app = express();
app.use(express.json({limit: '5mb'}));

const ALLOW = [/^https?:\/\/(api|internal)\./, /^https?:\/\/localhost(:\d+)?/];

app.post('/proxy', async (req, res) => {
  try {
    const { method = 'GET', url, headers = {}, body } = req.body || {};
    if (!url || !ALLOW.some(rx => rx.test(url))) {
      return res.status(400).json({ error: 'Blocked by policy: URL not on allow-list' });
    }
    const safeHeaders = {...headers};
    if (safeHeaders.Authorization) safeHeaders.Authorization = 'REDACTED';
    const init = { method, headers, body: ['GET','HEAD'].includes(method) ? undefined : body };
    const started = Date.now();
    const resp = await fetch(url, init);
    const buf = await resp.arrayBuffer();
    const time = Date.now() - started;
    const outHeaders = {};
    resp.headers.forEach((v,k)=> outHeaders[k]=v);
    res.status(200).json({
      status: resp.status,
      statusText: resp.statusText,
      headers: outHeaders,
      time,
      size: buf.byteLength,
      body: Buffer.from(buf).toString('base64'),
      bodyEncoding: 'base64'
    });
  } catch (e) {
    res.status(500).json({ error: 'Proxy error', detail: String(e) });
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Proxy listening on ${port}`));
