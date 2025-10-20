import { Express, Request, Response } from 'express';

export function registerRoutes(app: Express) {
  app.get('/api/orders', (_req: Request, res: Response) => {
    res.json([{ id: 'o1', item: 'Widget', qty: 2 }]);
  });

  app.post('/api/orders', (req: Request, res: Response) => {
    const { item, qty } = req.body ?? {};
    if (!item || !qty || qty < 1) {
      return res.status(400).json({ error: 'Invalid payload' });
    }
    res.status(201).json({ id: 'o2', item, qty });
  });
}
