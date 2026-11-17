# Leafword
English scanned PDF / image to Word converter. All document processing happens in browser memory. No uploads, analytics, browser storage, or service workers. The downloaded DOCX is saved by the user locally. Hosting receives normal requests for application assets. CSP restricts connections to the application origin, and application code never transmits document content.

## Build and run locally
Install Node.js 22+, run `npm ci --cache ./work/npm-cache` then `node build.mjs`. Serve `dist` with a local static HTTP server (for example `python3 -m http.server 3000 --directory dist`). After building, no external network is needed. Do not use file:// because workers require HTTP. Public libraries / English OCR language data are downloaded only at build time. Source HTML and CSS are in dist; app source is app-source.js. The app itself is MIT-licensed; see THIRD-PARTY-NOTICES.txt for dependency licences.

## Limits and verification
30 files, 30 MB each, up to 100 pages per conversion. Upright English scans recommended. Heading detection is heuristic: review text and semantic heading styles before downloading. Multi-column layouts, footnotes, tables and illustrations are not preserved. Processing large books can exhaust browser memory; split books into smaller batches.
Designed toward WCAG 2.2 AAA; full conformance has not been audited. Browser QA was unavailable in the build environment. Open-source application technology is used throughout; the optional hosted deployment is managed by the Sites platform, which is not represented as open-source infrastructure. Self-host dist with an open-source server for an entirely open-source hosting stack.
