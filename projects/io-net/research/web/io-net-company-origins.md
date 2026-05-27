# io.net — Company Origins (Docs page)

- **URL:** https://io.net/docs/guides/inception
- **Fetched:** 2026-05-26
- **Tool:** firecrawl_scrape
- **Reliability:** Company-generated (technical reference)

## Founding origin (verbatim)

> Prior to June 2022, io.net was exclusively devoted to the development of
> institutional-grade quantitative trading systems for both the United States
> stock market and the cryptocurrency market. Our primary challenge was
> constructing the infrastructure necessary to accommodate our complex needs,
> which included a robust backend trading system with significant computational
> power.

> Our trading strategies, bordering on high-frequency trading (HFT),
> necessitated real-time monitoring of the tick data of over 1,000 stocks and
> 150 cryptocurrencies… optimized to facilitate trading for more than 30,000
> individual clients across ETrade.com, Alpaca.markets, and Binance.com.

## Pivot rationale

- Used **Ray.io** (UC Berkeley open source, also used by OpenAI for GPT-3/4
  training across 300,000+ CPUs and GPUs) to streamline backend.
- After integrating Ray, faced **prohibitive on-demand GPU pricing**: NVIDIA
  A100 cost ~$80/day/card; needed ~50 cards × 25 days = $100k/month.
- This pricing problem motivated the pivot from HFT to DePIN.

## Technical thesis

- Distributed applications becoming the norm due to "the end of Moore's Law"
  and the rapidly growing computational demands of ML.
- ML training compute requirement doubling every 3.4 months since 2012 (per
  OpenAI), 40x every 18 months — far outstripping Moore's Law's 1.6x/year.
- For tuning: RoBERTa uses 17 hyperparameters → 130k+ configurations.
- Reinforcement learning: OpenAI used 128,000 CPU cores and 256 GPUs to train
  Dota 2 model.

## Notes for analyst

- The HFT-to-DePIN pivot story is **unusual but coherent** — internal compute
  pain point matched the broader market need.
- Trading 30,000 client accounts is a non-trivial scale; if true, the team has
  high-frequency / low-latency operations experience that maps to GPU
  scheduling.
- The page does **not name the original company or any HFT entity**; this is
  presented as a unitary "io.net" history.
