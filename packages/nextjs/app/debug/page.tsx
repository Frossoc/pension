import Image from "next/image";
import { DebugContracts } from "./_components/DebugContracts";
import type { NextPage } from "next";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

// Importa el componente Image

export const metadata = getMetadata({
  title: "Debug Contracts",
  description: "Debug your deployed 🏗 Scaffold-ETH 2 contracts in an easy way",
});

const Debug: NextPage = () => {
  return (
    <>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Compound interest</div>
          <div className="stat-value text-primary">11K</div>
          <div className="stat-desc">15% more than last month</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <div className="stat-title">Pool Accumulation</div>
          <div className="stat-value text-secondary">10K</div>
          <div className="stat-desc">11% more than last month</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <Image
                  src="https://cdn.pixabay.com/photo/2019/12/28/02/16/senior-4723737_1280.jpg"
                  alt="Profile picture"
                  width={64} // Ajusta el tamaño según sea necesario
                  height={64} // Ajusta el tamaño según sea necesario
                />
              </div>
            </div>
          </div>
          <div className="stat-value">60%</div>
          <div className="stat-title">Goals</div>
          <div className="stat-desc text-secondary">Next year&apos;s goal</div>
        </div>
      </div>

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
