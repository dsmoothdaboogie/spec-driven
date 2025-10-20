# Acceptance Tests (GWT)

## Request Builder
- Given a valid URL and method, when user clicks Send, then response status/body/headers render and timing metrics show.
- Given a 4xx/5xx response, when user sends, then error panel shows details and raw body.
- Given binary response, when user saves, then file downloads with correct MIME.

## Environments
- Given env var {{API_URL}}, when used in URL, then resolved from selected environment.
- Given a variable marked secret, when exporting environment, then value is redacted.

## Collections & History
- Given a built request, when user clicks Save to Collection, then it appears under a folder.
- Given a sent request, when reopening History item, the builder populates with stored values.

## Proxy & Security
- Given a URL not on allow-list, when sending, then proxy blocks with policy error (no network call).
- Given TLS client cert configured on server, when sending to mTLS target, handshake succeeds.

## E2E Scenarios
- Build → Send → Inspect → Save to Collection → Re-run from Collection.
- Switch environment and verify variable resolution.
