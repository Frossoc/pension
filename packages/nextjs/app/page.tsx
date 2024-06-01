"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWJteDNiM3h4MHc4NDZ3bTZzd3kzYWlrNGNrcGNlbngzcDE1ZWxqcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3vR9AY7Wjee8T9As/giphy.webp)",
        }}
      >
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Empower your Future, PensionVerse</h1>
            <div className="mb-5">
              <p className="font-medium">Connected Address:</p>
              <Address address={connectedAddress} />
            </div>
            <Link href="/register" passHref>
              <button className="btn btn-primary mb-5">Get Started</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10 px-4 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-5 text-center">How it works?</h2>
        <ul className="steps mb-10">
          <li className="step step-primary">Register</li>
          <li className="step step-primary">Choose plan</li>
          <li className="step">Follow each process</li>
          <li className="step">Manage your pension in a transparent and secure way</li>
        </ul>
      </div>

      <div className="mt-10 px-4 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-5 text-center">Our Process</h2>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li className="mb-10">
            <div className="timeline-middle mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end">
              <div className="text-lg font-black">Deposit your salary</div>
              <p>
                Your salary is deposited into the decentralized pension. The process is fully transparent and secure.
              </p>
            </div>
            <hr className="border-gray-300 my-4" />
          </li>
          <li className="mb-10">
            <div className="timeline-middle mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end">
              <div className="text-lg font-black">The % of your salary is converted to blockchain network.</div>
              <p>We use ChainLink s CCIP protocol to ensure transaction security.</p>
            </div>
            <hr className="border-gray-300 my-4" />
          </li>
          <li className="mb-10">
            <div className="timeline-middle mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end">
              <div className="text-lg font-black">Fragmentation of your savings</div>
              <p>Your savings are fragmented and allocated as follows:</p>
              <ul className="list-disc list-inside ml-4">
                <li>5% goes to administrative fees</li>
                <li>10% is reserved for future gas fees</li>
                <li>25% goes to staking</li>
                <li>25% is invested in SP 500 index funds</li>
                <li>25% is used for generating loans</li>
                <li>10% remains available for you to use anytime</li>
              </ul>
              <p className="text-lg font-black">
                All processes are fully transparent and traceable. Adheres to high security standards to protect your
                funds.
              </p>
            </div>
            <hr className="border-gray-300 my-4" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
