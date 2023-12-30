import { WagmiConfig, createConfig, configureChains } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { avalanche, bsc, mainnet } from "wagmi/chains";
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()],
);
import { SessionProvider } from "next-auth/react";
const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
});

const Solana = ({ children }) => {
  return (
    <WagmiConfig config={config}>
      <SessionProvider
        session={pageProps.session}
        refetchInterval={0}
      ></SessionProvider>
    </WagmiConfig>
  );
};
