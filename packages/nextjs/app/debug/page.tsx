import { DebugContracts } from "./_components/DebugContracts";
import type { NextPage } from "next";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Debug Contracts",
  description: "Debug your deployed 🏗 Scaffold-ETH 2 contracts in an easy way",
});

const Debug: NextPage = () => {
  return (
    <>
      <div className="stats bg-primary text-primary-content">
        <div className="stat">
          <div className="stat-title">Current balance</div>
          <div className="stat-value">$89,400</div>
          <div className="stat-actions">
            <button className="btn btn-sm">Withdrawal</button>
            <button className="btn btn-sm">Deposit</button>
          </div>
        </div>
      </div>

      <ul className="steps">
        <li className="step step-info">25% goes to staking</li>
        <li className="step step-info">25% is invested</li>
        <li className="step step-info">25% is used for generating loans</li>
        <li className="step step-error" data-content="?">
          10% remains available for you to use anytime
        </li>
      </ul>

      <DebugContracts />
      <div className="text-center mt-8 bg-secondary p-10">
        <h1 className="text-4xl my-0">Pension decentralized</h1>
        <p className="text-neutral">
          <br /> Check <code className="italic bg-base-300 text-base font-bold [word-spacing:-0.5rem] px-1"></code>{" "}
        </p>
      </div>
    </>
  );
};

export default Debug;
