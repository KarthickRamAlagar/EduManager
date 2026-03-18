import { UserAvatar } from "@/components/refine-ui/layout/user-avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { useGetIdentity } from "@refinedev/core";
import { useLogout } from "@refinedev/core";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  image?: string;
};

export function UserInfo() {
  const { data: user, isLoading: userIsLoading } = useGetIdentity<User>();
  const { mutate: logout } = useLogout();

  if (userIsLoading || !user) {
    return (
      <div className="flex items-center gap-x-2">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div className="flex flex-col justify-between h-10">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
    );
  }

  const { name, email, role, id } = user;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-x-2 cursor-pointer">
          <UserAvatar />
          <div className="flex flex-col text-left">
            <span className="text-sm font-medium text-muted-foreground">
              {name}
            </span>
            <span className="text-xs text-muted-foreground">{email}</span>
          </div>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-64">
        <DropdownMenuLabel>User Details</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <div className="px-2 py-1 text-sm space-y-1">
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Role:</strong> {role}
          </p>
          <p>
            <strong>ID:</strong> {id}
          </p>
        </div>

        <DropdownMenuSeparator />

        {/* ✅ Logout inside dropdown */}
        <DropdownMenuItem
          onClick={() => logout()}
          className="text-red-500 cursor-pointer"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

UserInfo.displayName = "UserInfo";
