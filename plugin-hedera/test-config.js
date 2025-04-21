import { HederaProvider } from './dist/index.js';

const testRuntime = {
  getSetting: (key) => {
    const settings = {
      'HEDERA_ACCOUNT_ID': '0.0.1234',
      'HEDERA_PRIVATE_KEY': '302e...',
      'HEDERA_KEY_TYPE': 'ED25519',
      'HEDERA_PUBLIC_KEY': '302a...',
      'HEDERA_NETWORK_TYPE': 'testnet',
      'HEDERA_MIRROR_NODE_CONFIG': JSON.stringify({
        apiUrl: 'https://testnet.mirrornode.hedera.com',
        apiKey: 'test-key'
      }),
      'HEDERA_TRANSACTION_CONFIG': JSON.stringify({
        maxTransactionFee: 2
      })
    };
    return settings[key];
  }
};

async function test() {
  try {
    const provider = new HederaProvider(testRuntime);
    const kit = provider.getHederaAgentKit();
    console.log('Hedera Agent Kit initialized with:');
    console.log('- Network:', testRuntime.getSetting('HEDERA_NETWORK_TYPE'));
    console.log('- Mirror Node:', JSON.parse(testRuntime.getSetting('HEDERA_MIRROR_NODE_CONFIG')).apiUrl);
    console.log('- Max Tx Fee:', JSON.parse(testRuntime.getSetting('HEDERA_TRANSACTION_CONFIG')).maxTransactionFee);
  } catch (error) {
    console.error('Test failed:', error);
  }
}

test();
