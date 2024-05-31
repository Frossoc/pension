"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
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
            <h1 className="mb-5 text-5xl font-bold">Empower your Future, Decentralized Pension</h1>
            <div className="mb-5">
              <p className="font-medium">Connected Address:</p>
              <Address address={connectedAddress} />
            </div>
            <Link href="/debug" passHref>
              <button className="btn btn-primary mb-5">Get Started</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
        <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
          <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
            <BugAntIcon className="h-8 w-8 fill-secondary" />
            <p>
              Tinker with your smart contract using the{" "}
              <Link href="/debug" passHref className="link">
                Debug Contracts
              </Link>{" "}
              tab.
            </p>
          </div>
          <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
            <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
            <p>
              Explore your local transactions with the{" "}
              <Link href="/blockexplorer" passHref className="link">
                Block Explorer
              </Link>{" "}
              tab.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
