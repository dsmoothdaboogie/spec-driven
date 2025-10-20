# Acceptance Tests (GWT)

- Given a valid order payload, when POST /api/orders, then 201 with schema Order.
- Given qty < 1, when POST /api/orders, then 400 with error schema.
- Given existing orders, when GET /api/orders, then 200 array[Order].
