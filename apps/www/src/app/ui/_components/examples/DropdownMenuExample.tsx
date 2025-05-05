import {
  DrodpownMenuTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/app/_components/ui/dropdown-menu";

import {
  LayoutGridIcon,
  TrashIcon,
  Building2,
  UserCircleIcon,
  ChevronRightIcon,
  BellIcon,
} from "lucide-react";

import { cn } from "@/utils/cn";

const ITEMS = [
  { icon: <UserCircleIcon size={16} />, name: "Profile" },
  { icon: <LayoutGridIcon size={16} />, name: "Your applications" },
  { icon: <Building2 size={16} />, name: "Teams" },
  { icon: <BellIcon size={16} />, name: "Notifications" },
  {
    icon: <TrashIcon size={16} />,
    name: "Remove account",
    customStyle:
      "!text-red-500 duration-150 hover:!bg-red-600/10 focus-visible:text-red-500 focus-visible:!bg-red-500/10 focus-visible:!border-red-500/10",
  },
];

export function DropdownMenuExample() {
  return (
    <DropdownMenu>
      <DrodpownMenuTrigger>
        <span className="text-sm font-medium text-neutral-500 dark:text-neutral-300">
          Settings
        </span>
      </DrodpownMenuTrigger>
      <DropdownMenuContent>
        {ITEMS.map(({ icon, name, customStyle }, index) => (
          <DropdownMenuItem key={index} className={cn("group", customStyle)}>
            {icon}
            <span className="flex items-center gap-1 text-sm font-medium">
              {name}
              <ChevronRightIcon
                size={12}
                className="-translate-x-1 scale-0 opacity-0 transition-all group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100"
              />
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
