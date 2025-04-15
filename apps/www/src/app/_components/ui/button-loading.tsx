"use client";

import React from "react";

import { Spinner } from "./spinner";
import { TextShine } from "./text-shine";

export function ButtonLoading() {
  return (
    <button
      disabled
      className="mx-auto flex items-center gap-2 rounded-xl bg-black px-4 py-2 text-sm font-semibold duration-300 disabled:cursor-not-allowed disabled:opacity-80 dark:bg-white"
    >
      <Spinner />
      <TextShine />
    </button>
  );
}
