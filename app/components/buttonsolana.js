import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import useGuardedCallback from "../../utils/useGuardedCallback";

export default function ConnectButton(props) {
  const { connect, connected, disconnect, wallet } = useWallet();
  const { setVisible: showWalletSelectionModal } = useWalletModal();
  const handleConnectClick = useGuardedCallback(connect, [connect]);
  const handleDisconnectClick = useGuardedCallback(disconnect, [disconnect]);
  if (wallet != null) {
    return (
      <div className="px-8">
        <p className="text-lg py-2 uppercase">
          {wallet.adapter.name} Wallet Connected
        </p>
        <button
          {...props}
          //disabled={connected}
          onClick={handleDisconnectClick}
          className="btn btn-accent btn-wide uppercase"
        >
          <img src="/logo_solanasm.png" className="size-8" alt="Solana" />
          Disconnect
        </button>
      </div>
    );
  } else {
    return (
      <button
        {...props}
        onClick={() => showWalletSelectionModal(true)}
        className="btn btn-accent btn-wide uppercase"
      >
        <img src="/logo_solanasm.png" className="size-8" alt="Solana" />
        Connect Wallet
      </button>
    );
  }
}
