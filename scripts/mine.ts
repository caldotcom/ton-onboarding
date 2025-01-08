import { Address } from '@ton/ton';
import * as dotenv from 'dotenv';
dotenv.config();

if (!process.env.WALLET_ADDRESS || !process.env.COLLECTION_ADDRESS) {
    throw new Error('Please set WALLET_ADDRESS and COLLECTION_ADDRESS in .env file. See .env.example file for layout :)');
}

const walletAddress = Address.parse(process.env.WALLET_ADDRESS);
const collectionAddress = Address.parse(process.env.COLLECTION_ADDRESS);

async function mine() {
    // Mining logic goes here
}

mine().catch(console.error);