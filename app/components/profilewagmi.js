import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsName,
  useBalance,
} from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Profile() {
  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();
  const { data, isError, isLoading } = useBalance({
    address: { address },
  });

  if (isConnected)
    return (
      <div>
        <p className="text-xl pb-4 text-primary">
          Connected to {ensName ?? address}
        </p>
        <p className="text-xl pb-4 text-primary">
          Balance: {data?.formatted} {data?.symbol}
        </p>
        <button
          className="btn btn-wide btn-accent font-bold uppercase py-2"
          onClick={() => disconnect()}
        >
          Disconnect
        </button>
      </div>
    );
  return (
    <button
      className="btn btn-wide btn-accent font-bold uppercase py-2"
      onClick={() => connect()}
    >
      Connect
    </button>
  );
}
