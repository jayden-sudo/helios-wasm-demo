# Helios WebAssembly Demo

A demonstration project showcasing the Helios WebAssembly library for Ethereum light client functionality.

## Overview

This project demonstrates how to use the Helios WebAssembly library to interact with Ethereum in a browser environment. It provides a simple way to get started with Helios WASM integration.

The `pkg/helios_ts_bg.wasm` file is compiled from the Helios repository at commit [354c378](https://github.com/a16z/helios/commit/354c378da8bb92836aa93634efb61d244f1b7fd1).

## Prerequisites

- Node.js

## Configuration

Before running the project, you need to configure your Ethereum RPC endpoint:

1. Open `src/index.ts`
2. Replace `'https://eth-mainnet.g.alchemy.com/v2/xxx'` with your own Ethereum RPC URL

## Installation

```bash
# Clone the repository
git clone https://github.com/jayden-sudo/helios-wasm-demo.git
cd helios-wasm-demo

# Install dependencies
npm install
```

## Usage

1. Start the development server:
```bash
npm start
```

## Checkpoint Selection Guide

To select a checkpoint for the light client:

1. Visit [Beaconcha.in](https://beaconcha.in/)
2. Find a Final Epoch within the last 2 weeks (preferably the latest one for faster sync)
3. In the Slot list, locate and click on the last Slot
4. Copy the `Block Root` value from the page - this will be your checkpoint
