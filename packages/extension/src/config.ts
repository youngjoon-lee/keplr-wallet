import { Bech32Address } from "@keplr-wallet/cosmos";
import { ChainInfo } from "@keplr-wallet/types";

export const EmbedChainInfos: ChainInfo[] = [
  {
    rpc: "https://rpc.gopanacea.org",
    rest: "https://api.gopanacea.org",
    chainId: "panacea-3",
    chainName: "MediBloc",
    stakeCurrency: {
      coinDenom: "MED",
      coinMinimalDenom: "umed",
      coinDecimals: 6,
      coinGeckoId: "medibloc",
    },
    walletUrl:
      process.env.NODE_ENV === "production"
        ? "https://wallet.keplr.app/chains/medibloc"
        : "http://localhost:8080/chains/medibloc",
    walletUrlForStaking:
      process.env.NODE_ENV === "production"
        ? "https://wallet.keplr.app/chains/medibloc"
        : "http://localhost:8080/chains/medibloc",
    bip44: {
      coinType: 371,
    },
    bech32Config: Bech32Address.defaultBech32Config("panacea"),
    currencies: [
      {
        coinDenom: "MED",
        coinMinimalDenom: "umed",
        coinDecimals: 6,
        coinGeckoId: "medibloc",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "MED",
        coinMinimalDenom: "umed",
        coinDecimals: 6,
        coinGeckoId: "medibloc",
        gasPriceStep: {
          low: 5,
          average: 6,
          high: 7,
        },
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
  },
];

// The origins that are able to pass any permission that external webpages can have.
export const PrivilegedOrigins: string[] = [
  "https://wallet.keplr.app",
  "https://validator.keplr.app",
];

export const CommunityChainInfoRepo = {
  organizationName: "chainapsis",
  repoName: "keplr-chain-registry",
  branchName: "main",
};
