"use client";
import { ThemeProvider } from "next-themes";
import { WagmiConfig, createConfig, configureChains } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { avalanche, bsc, mainnet } from "wagmi/chains";
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()],
);

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
});
export function Providers({ children }) {
  return (
    <WagmiConfig config={config}>
      <ThemeProvider defaultTheme="system">{children}</ThemeProvider>
    </WagmiConfig>
  );
}
