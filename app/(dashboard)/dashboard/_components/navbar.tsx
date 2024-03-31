"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MobileSidebar } from "./mobile-sidebar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { logout } from "@/actions/logout";


export const Navbar = ({ count }: { count: number }) => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
      <MobileSidebar />
      <div className=" container  ">
        <div className="flex items-center justify-end">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                    className=" cursor-pointer"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Button>
            </PopoverTrigger>
            <PopoverContent
              side="bottom"
              align="end"
              className="w-[200px] bg-white cursor-pointer"
            >
              <Button onClick={() =>  logout()} className="w-full" variant="secondary">
                Logout
              </Button>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};
