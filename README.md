# Creating your Own Token

This project will create a Smart Contract to deploy new token on the blockchain.

![Newly Created Token ](/images/new-token-smart-contract.png)

##

## Technologies

```
Truffle
Truffle-hdwallet-provider
Openzeppelin-solidity
```

## Usage

The necessary `node_modules` are already installed so there is no need to run `npm install` but there are a few steps to get set up before running the code:

### 1. How To Setup

1. Create an account with `infura.io` and obtain an API Key.
2. Select a test network such as `Sepolia` and obtain its Network ID.
3. Get the Mnemonic Seed Phrase of the wallet you'll be using to deploy the contract.
4. Update `truffle-config.js` with the `infura` API key, the wallet's Mnemonic Seed Phrase, and the Network ID, and any other field required to run the local network.
5. Update `2_initial_migration.js` with your own token name. Mine is "MST".

### 2. How To Run

1. Compile your solidity contract files:

```
truffle compile
```

2. Deploy the contract:

- To run on a local network, `ganache` for example:

```
truffle migrate --reset --network development
```

- To run on a `testnet` network such as `Sepolia`:

```
truffle migrate --reset --network sepolia

```

3. Use a block explorer to review your newly created token on the blockchain. For `Sepolia`, go to:

```
https://sepolia.etherscan.io
```

4. Now you can import this token to your Metamask and start sending tokens to other addresses.

![Sending the Token to other addresses ](/images/sending-token-in-metamask.png)
