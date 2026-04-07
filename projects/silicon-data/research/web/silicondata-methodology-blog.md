# Silicon Data — Building a Robust GPU Index (Blog Post)

- **URL:** https://www.silicondata.com/blog/building-a-robust-gpu-index
- **Fetched:** 2026-04-07
- **Tool:** firecrawl_scrape, formats: markdown, onlyMainContent: true
- **Reliability:** Company-generated (blog by Carmen Li, Mar 12, 2026)

## Key methodology facts

- **Indices tracked:** A100, H100, B200
- **Bloomberg tickers:** SDA100RT, SDH100RT, SDB200RT
- **Scale claims:**
  - 150k daily verified pricing records
  - 40-50 countries and regions
  - 50-100 platforms (hyperscalers, neoclouds, marketplaces)
  - Time span: September 1, 2024 onward
- **Lease types covered:** On-demand, Spot (interruptible), Reserved (1-60 months)
- **Methodology principles:**
  1. Broad market coverage (avoid narrow specification)
  2. Precise characterization (lease type, provider, location, hardware specs)
  3. Proprietary normalization framework (normalize heterogeneous physical units to standard configuration)
  4. Daily calculation
- **What they criticize (competitors implied):**
  - "Simple average" approach — hides variability
  - "Narrow specification" — too small market slice
- **Team members visible from blog authors:** Carmen Li, Yang Gao, Yuhua Yu, Platon Slynko, Jason Cornick

## Notable gaps

- No specific normalization formula or algorithm disclosed
- "Proprietary framework" — same opacity concern as OCPI
- No mention of IOSCO, independent audit, or third-party validation
- No replication package mentioned
- No governance structure for methodology changes described
- No contributor concentration analysis
