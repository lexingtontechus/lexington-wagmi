import { useAccount, useConnect, useDisconnect, useEnsName } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Profile() {
  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  if (isConnected)
    return (
      <div>
        <p className="text-xl pb-4">Connected to {ensName ?? address}</p>
        <button
          className="btn btn-wide btn-primary font-bold uppercase py-2"
          onClick={() => disconnect()}
        >
          Disconnect
        </button>
      </div>
    );
  return (
    <button
      className="btn btn-wide btn-primary font-bold uppercase py-2"
      onClick={() => connect()}
    >
      Connect
    </button>
  );
}
