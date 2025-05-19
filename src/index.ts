import { EthereumClient } from '../pkg/helios_ts';

async function main() {
    // Test ethereum
    {
        console.log('Ethereum module loaded');
        // Connect
        const ethereum = new EthereumClient(
            'https://eth-mainnet.g.alchemy.com/v2/xxx',
            undefined,
            'https://www.lightclientdata.org',
            'mainnet',
            /*
            Requirements for selecting checkpoint:
            1. Open https://beaconcha.in/
            2. Find a Final Epoch within the last 2 weeks and open it (preferably the latest one for faster sync)
            3. In the Slot list, find the last Slot and open it
            4. The Block Root on the page is the checkpoint
            */
            '0xffec59d229dcc8efb8ca7b6ea37bf81060a94663ac967e153314f6865b847a62',
            'config'
        );
        const chainId = await ethereum.chain_id();
        console.log('Chain ID:', chainId);
        await ethereum.wait_synced();
        // await ethereum.sync();
        const blockNumber = await ethereum.get_block_number();
        console.log('Block number:', blockNumber);
    }
}

main();