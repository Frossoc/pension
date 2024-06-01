"use client";

import { useEffect } from "react";
import { ContractUI } from "~~/app/debug/_components/contract";
import { ContractName } from "~~/utils/scaffold-eth/contract";
import { getAllContracts } from "~~/utils/scaffold-eth/contractsData";

const contractsData = getAllContracts();
const contractNames = Object.keys(contractsData) as ContractName[];

// Define the contract to display
const contractToDisplay: ContractName = "TransferUSDCBasic";

export function DebugContracts() {
  // Ensure the contract exists in the data
  useEffect(() => {
    if (!contractNames.includes(contractToDisplay)) {
      console.error(`Contract ${contractToDisplay} not found!`);
    }
  }, []);

  return (
    <div className="flex flex-col gap-y-6 lg:gap-y-8 py-8 lg:py-12 justify-center items-center">
      {contractNames.length === 0 ? (
        <p className="text-3xl mt-14">No contracts found!</p>
      ) : (
        <ContractUI key={contractToDisplay} contractName={contractToDisplay} />
      )}
    </div>
  );
}
