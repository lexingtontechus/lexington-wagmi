import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";

export default function ProfileSolana() {
  const { connect, connected, wallet } = useWallet();
  return (
    <div className="flex justify-center mx-auto">
      {wallet ? (
        <div className="px-8">
          <p className="text-xl py-2 uppercase">
            {wallet.adapter.name} Connected
          </p>
          <button className="btn btn-accent btn-wide uppercase">
            <WalletDisconnectButton />
          </button>
        </div>
      ) : (
        <button className="btn btn-accent btn-wide uppercase">
          <WalletMultiButton />
        </button>
      )}
    </div>
  );
}
