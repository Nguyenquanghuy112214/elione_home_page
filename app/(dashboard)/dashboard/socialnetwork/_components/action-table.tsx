"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useModalSchedule } from "@/hooks/use-modal-store-schedule";
import { useModalSocial } from "@/hooks/use-modal-store-socialnetwork";
import { MoreHorizontal } from "lucide-react";
import React from "react";

function ActionTable({
  id,
  zalo,
  tiktok,
  facebook,
  location,
  youtube,
}: {
  id: string;
  zalo: string;
  tiktok: string;
  facebook: string;
  location: string;
  youtube: string;
}) {
  const { onOpen } = useModalSocial();
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right" align="center" className=" bg-white">
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() =>
              onOpen("editSocial", {
                id,
                zalo,
                tiktok,
                facebook,
                location,
                youtube,
              })
            }
          >
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              onOpen("deleteSocial", {
                id,
                zalo,
                tiktok,
                facebook,
                location,
                youtube,
              })
            }
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default ActionTable;
