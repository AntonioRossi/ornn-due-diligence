# Rigetti Technology Stack

Source: rigetti.com/what-we-build
Scraped: 2026-05-27

## Architectural pillars

1. **Chip design and fabrication** (in-house Fab-1)
2. **Superconducting quantum processors** (transmon-based, 3-6 GHz resonant)
3. **Control systems** (custom FPGA-based, low-latency)
4. **QCS Platform** (Quantum Cloud Services, <1ms latency to QPU)
5. **Gate-based operations** (universal quantum computer model)

## Fab-1 (Fremont, CA)

- **Captive quantum integrated circuit foundry** — "industry's first dedicated and integrated quantum device manufacturing facility"
- Combines modern silicon semiconductor + MEMS processing
- Materials: aluminum, indium, niobium (superconducting)
- Subtractive patterning, etching, lithography, deposition processes
- Best practices from both industrial and research fabs
- Continuous shortloop development tests; statistical-grade QA via dedicated cryogenic test systems

## QPU architecture

- Each qubit = nonlinear Josephson inductance ∥ ultra-low-loss capacitor
- Qubits coupled to linear superconducting resonators for readout
- Single-input/output multiplexed readout (scalability)
- **Through-silicon vias + bonded superconducting cap**: enables 3D signaling, isolation, dense I/O
- **Modular chiplet tiling**: 9-qubit chiplets composed into larger systems (Cepheus-1-36Q = 4 chiplets; Cepheus-1-108Q = 12 chiplets)
- **Proprietary adiabatic CZ entangling gate**: enables 99.9% two-qubit fidelity at 28ns gate speed on prototypes

## QPU lineage (selected)

| System | Qubits | Deployed | 2Q Fidelity |
|--------|--------|----------|-------------|
| Cepheus-1-108Q | 108 | Apr 7, 2026 | 99.1% (CZ) |
| Cepheus-1-36Q | 36 | Aug 12, 2025 | 99.5% (CZ) |
| Ankaa-3 | 84 | Dec 20, 2024 | 99.0% (ISWAP) |
| Ankaa-9Q-3 | 9 | Jun 27, 2024 | 99.3% (ISWAP) |
| Ankaa-9Q-1 | 9 | Dec 2023 | 97.8% (ISWAP) |
| Ankaa-2 | 84 | Dec 20, 2023 | 98.0% (ISWAP) |
| Ankaa-1 | 84 | Mar 2023 | 94.9% (ISWAP) |
| Aspen-M-3 | 80 | Dec 2, 2022 | 94.7% (CZ) |
| Aspen-1 | 16 | Nov 15, 2018 | 90.84% |
| Acorn | 19 | Dec 17, 2017 | 87.5% |
| Agave | 8 | Jun 4, 2017 | 87.0% |

## Performance differentiators

- **Gate speed: 50-70ns** (1,000× faster than trapped-ion or neutral-atom systems per company)
- **<0.1% amplitude crosstalk**
- **<1ms latency** from classical to quantum on QCS (vs seconds-to-hours on competing platforms)
- **Multiplexed readout** with on-chip design features

## Software stack

- **PyQuil**: Python library for writing quantum programs in Quil
- **Quil**: quantum instruction language; combines gate-level and pulse-level descriptions
- **Quil-T**: continuous-time extension for pulse-level control
- **Quilc**: optimizing quantum compiler (accepts Quil and QASM)
- **QVM**: Quantum Virtual Machine simulator
- All open-source via the Quil SDK

## Investor takeaways

- **Vertical integration is structurally rare in pure-play quantum**: Rigetti owns design + fabrication + control + cloud — the only competitor with comparable vertical scope is IBM (which has Yorktown Heights fab) and Google (Santa Barbara fab)
- IonQ and Quantinuum use **trapped-ion**: different physical modality, slower gate speeds, but historically higher fidelity. Rigetti's case is that chiplet-based superconducting scales faster.
- The **chiplet tiling architecture is the company's most differentiating IP** — proven from 9Q → 36Q → 108Q. The scaling thesis depends on this continuing to 1,000+ qubits.
- **Fidelity gap to ion-trap modalities is narrowing**: 99.9% on prototype 2-qubit gates puts Rigetti in the same range as IonQ's published numbers, but at 50× the gate speed.
- DARPA QBI 2033 utility-scale target is the official industry timeline; Kulkarni guides "3-4 years" to quantum advantage demonstration.
