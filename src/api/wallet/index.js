import {
	configureChains,
	createClient,
	erc20ABI,
	fetchSigner,
} from "@wagmi/core";

import { polygon } from "@wagmi/core/chains";

import { Web3Modal } from "@web3modal/html";

import { ethers } from "ethers";

import {
	EthereumClient,
	modalConnectors,
	walletConnectProvider,
} from "@web3modal/ethereum";

const chains = [polygon];

// Wagmi Core Client
export const { provider } = configureChains(chains, [
	walletConnectProvider({
		projectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID,
	}),
]);
const wagmiClient = createClient({
	autoConnect: true,
	connectors: modalConnectors({ appName: "web3Modal", chains }),
	provider,
});

// Web3Modal and Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);
export const web3modal = new Web3Modal(
	{ projectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID },
	ethereumClient
);

export function connect() {
	return new Promise((resolve, reject) => {
		web3modal.openModal();
		let account = ethereumClient.getAccount();
		if (account.address) {
			resolve(account.address);
		} else {
			const unsubscribe = web3modal.subscribeModal((newState) => {
				if (!newState.open) {
					unsubscribe();
					reject("closed");
				}
			});
			ethereumClient.watchAccount((newState) => {
				if (newState.isConnected) {
					unsubscribe();
					resolve(newState.address);
				}
			});
		}
	});
}

export function disconnect() {
	return ethereumClient.disconnect();
}

export function getAccountAddress() {
	const account = ethereumClient.getAccount();
	if (account.isConnected) {
		return account.address;
	}
	return "";
}

export async function getERC20TokenBalance(contractAddress, decimals, chainId) {
	const balance = await ethereumClient.fetchBalance({
		address,
		chainId: chainId,
		formatUnits: decimals,
		token: contractAddress,
	});

	return balance;
	// return parseFloat(ethers.utils.formatUnits(balance, decimals));
}
