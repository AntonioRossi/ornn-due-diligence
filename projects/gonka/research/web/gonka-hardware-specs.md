# Gonka — Hardware Specifications

- **URL:** https://gonka.ai/docs/host/hardware-specifications
- **Fetched:** 2026-05-26
- **Tool:** firecrawl_scrape, formats: markdown, onlyMainContent: true
- **Reliability:** Company-generated

## Eligibility criteria

- "Supports NVIDIA GPUs of generations newer than Tesla, provided that at least
  **40 GB total GPU VRAM** is available to each MLNode container."
- Any combination of GPUs is allowed if the system can host
  governance-approved LLMs and participate in PoC.

## Supported GPUs

| NVIDIA GPU | Release | VRAM | Architecture |
|---|---|---|---|
| H200 | 2024 | 141 GB HBM3e | Hopper |
| H100 | May 2022 | 80 GB HBM3 | Hopper |
| A100 | May 2020 | 40 / 80 GB HBM2e | Ampere |
| RTX 6000 Ada Gen | Dec 2022 | 48 GB GDDR6 | Ada Lovelace |
| RTX A6000 | Dec 2020 | 48 GB GDDR6 | Ampere |
| L40 | 2022 | 48 GB GDDR6 | Ada Lovelace |
| A40 | 2021 | 48 GB GDDR6 | Ampere |
| RTX 4090 (>= 2 per MLNode) | Oct 2022 | 24 GB GDDR6X | Ada Lovelace |
| RTX 3090 (>= 2 per MLNode) | Sep 2020 | 24 GB GDDR6X | Ampere |
| L4 (>= 2 per MLNode) | Mar 2023 | 24 GB GDDR6 | Ada Lovelace |

## Notes

- No AMD/Intel GPU support disclosed publicly.
- All certified hardware is NVIDIA — concentrates network on a single GPU vendor.
- Lower-tier consumer GPUs (4090/3090/L4) require pairing to meet the 40 GB VRAM
  floor.
