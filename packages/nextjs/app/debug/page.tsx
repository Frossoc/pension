import React from "react";
import Image from "next/image";
import { DebugContracts } from "./_components/DebugContracts";
import type { NextPage } from "next";

// Importar el componente Image de Next.js

const Debug: NextPage = () => {
  return (
    <div>
      {/* Fondo de imagen */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <Image
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGt2OXNiOXpiMHB0cmF1dDBkeGhkc29mbXdhNDVva2Ezdjl4MTAxNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KGkKyQAOU4U8DltXCD/giphy.webp"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Empower your Future</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">Decentralized Pension</p>
          </div>
        </div>
      </div>

      {/* Contenido del Debug */}
      <div className="text-center mt-8 bg-secondary p-10">
        <DebugContracts />
        <h1 className="text-4xl my-0">Debug Contracts</h1>
        <p className="text-neutral">
          You can debug & interact with your deployed contracts here.
          <br /> Check{" "}
          <code className="italic bg-base-300 text-base font-bold [word-spacing:-0.5rem] px-1">
            packages / nextjs / app / debug / page.tsx
          </code>{" "}
        </p>
      </div>
    </div>
  );
};

export default Debug;
