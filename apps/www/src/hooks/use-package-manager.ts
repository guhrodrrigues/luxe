import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

type PackageManager = "npm" | "pnpm" | "yarn" | "bun";

const configAtom = atomWithStorage<PackageManager>("packageManager", "npm");

export function usePackageManager() {
  return useAtom(configAtom);
}
