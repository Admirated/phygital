import {
	configureChains,
	createClient,
	fetchSigner,
	watchNetwork,
	switchNetwork,
	getNetwork,
	watchAccount,
} from "@wagmi/core";

import { polygon } from "@wagmi/core/chains";

import { Web3Modal } from "@web3modal/html";

import { ethers } from "ethers";

import { store } from "../../store";

import {
	EthereumClient,
	modalConnectors,
	walletConnectProvider,
} from "@web3modal/ethereum";

import { mintAbi } from "../../constants/mintAbi";
import { paymentAbi } from "../../constants/paymentAbi";
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
			stayWithNetwork();
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
					stayWithNetwork();
					resolve(newState.address);
				}
			});
		}
	});
}

async function stayWithNetwork() {
	const { chain } = getNetwork();
	if (chain.id !== 137) {
		await switchNetwork({
			chainId: 137,
		});
	}
	watchNetwork(async (network) => {
		if (network.chain?.id !== 137) {
			await switchNetwork({ chainId: 137 });
		}
	});

	watchAccount((account) => {
		if (!account.isConnected) {
			store.commit("logout");
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

const nftContractAddress = "0x5B8EA8563bbBfBfe87271989FC6C5A165565F680";
const paymentContractAddress = "0xc2132D05D31c914a87C6611C10748AEb04B58e8F";

const ethersProvider = new ethers.providers.JsonRpcProvider(
	"https://polygon-rpc.com"
);

function getNftContractWithoutSigner() {
	return new ethers.Contract(nftContractAddress, mintAbi, ethersProvider);
}

function getPaymentContractWithoutSigner() {
	return new ethers.Contract(paymentContractAddress, mintAbi, ethersProvider);
}

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

export async function invest(address, amountNft, objectId) {
	try {
		const increased = await increaseAllowance(amountNft);
		if (!increased) {
			throw new Error("Need to approve USDT");
		}
		const minted = await mintItems(address, amountNft, objectId);
		if (!minted) {
			throw new Error("NFT doesn't minted");
		}
		return { status: true };
	} catch (e) {
		console.log(e);
		return { status: false, error: e.message };
	}
}

async function increaseAllowance(amountNft) {
	try {
		const paymentContract = await getPaymentContract();
		const txHash = await paymentContract.increaseAllowance(
			nftContractAddress,
			(amountNft * 10 ** 18).toString()
		);
		console.log(txHash);
		const receipt = await txHash.wait();
		if (receipt && receipt.status == 1) {
			return true;
		}
	} catch (e) {
		console.log(e);
		return false;
	}
}

async function mintItems(address, amountNft, objectId) {
	try {
		const nftContract = await getNftContract();
		const txHash = await nftContract.mintItems(address, amountNft, objectId, {
			gasLimit: 3_500_000,
		});
		console.log(txHash);
		return true;
	} catch (e) {
		console.log(e);
		return false;
	}
}

export async function getClaimableAmount(address) {
	try {
		const nftContract = getNftContractWithoutSigner();
		const res = await nftContract.getClaimableAmount(address);
		return res.toNumber();
	} catch (e) {
		console.log(e);
		return false;
	}
}

export async function claimDividends(address) {
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

export async function getNftBalance(address) {
	try {
		const nftContract = getNftContractWithoutSigner();
		const res = await nftContract.balanceOf(address);
		return res.toNumber();
	} catch (e) {
		console.log(e);
		return false;
	}
}

export async function getUSDTBalance(address) {
	try {
		const USDTContract = getPaymentContractWithoutSigner();
		const res = await USDTContract.balanceOf(address);
		const balance = res.toNumber();
		if (balance) {
			return balance / 10 ** 6;
		}
		return 0;
	} catch (e) {
		console.log(e);
		return false;
	}
}
