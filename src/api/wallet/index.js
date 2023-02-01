import { configureChains, createClient, fetchSigner } from "@wagmi/core";

import { polygonMumbai } from "@wagmi/core/chains";

import { Web3Modal } from "@web3modal/html";

import { ethers } from "ethers";

import {
	EthereumClient,
	modalConnectors,
	walletConnectProvider,
} from "@web3modal/ethereum";

import { mintAbi } from "../../constants/mintAbi";
import { paymentAbi } from "../../constants/paymentAbi";
const chains = [polygonMumbai];

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

const nftContractAddress = "0xFc6D8e8c8e79B47eB10C7D26f3625C37783Ae91E";
const paymentContractAddress = "0x6203704A5148348c3Cc84554769c243f569daBb2";

async function getNftContract() {
	const signer = await fetchSigner();
	if (!signer) {
		console.log("Not provided signer");
		return;
	}
	const nftContract = new ethers.Contract(nftContractAddress, mintAbi, signer);
	return nftContract;
}

async function getPaymentContract() {
	const signer = await fetchSigner();
	if (!signer) {
		console.log("Not provided signer");
		return;
	}
	const paymentContract = new ethers.Contract(
		paymentContractAddress,
		paymentAbi,
		signer
	);
	return paymentContract;
}

async function increaseAllowance(value) {
	try {
		const paymentContract = await getPaymentContract();
		const txHash = await paymentContract.increaseAllowance(
			nftContractAddress,
			(value * 10 ** 18).toString()
		);
		console.log(txHash);
		await txHash.wait();
		return true;
	} catch (e) {
		console.log(e);
		return false;
	}
}

async function mintItems(address, value) {
	try {
		const nftContract = await getNftContract();
		const txHash = await nftContract.mintItems(address, value, {
			value: 0,
			gasLimit: 3_100_000,
		});
		console.log(txHash);
		return true;
	} catch (e) {
		console.log(e);
		return false;
	}
}

async function getClaimableAmount(address) {
	try {
		const nftContract = await getNftContract();
		const res = await nftContract.getClaimableAmount(address);
		return res.toNumber();
	} catch (e) {
		console.log(e);
		return false;
	}
}

async function claimDividends(address) {
	try {
		const nftContract = await getNftContract();
		const txHash = await nftContract.claimDividends(address);
		const receipt = await txHash.wait();
		if (receipt && receipt.status == 1) {
			return true;
		}
		return false;
	} catch (e) {
		console.log(e);
		return false;
	}
}

async function getNftBalance(address) {
	try {
		const nftContract = await getNftContract();
		const res = await nftContract.balanceOf(address);
		return res.toNumber();
	} catch (e) {
		console.log(e);
		return false;
	}
}
