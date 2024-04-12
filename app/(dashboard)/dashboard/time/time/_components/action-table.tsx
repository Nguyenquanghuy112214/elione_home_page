"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useModalProcess } from "@/hooks/use-modal-store-process";
import { useModalTime } from "@/hooks/use-modal-time";
import { MoreHorizontal } from "lucide-react";
import React from "react";

function ActionTable({
  id,
  location,
  img,
  timestart,
  timeend,
}: {
  id: string;
  img: string;
  location: string;
  timestart: Date;
  timeend: Date;
}) {
  const { onOpen } = useModalTime();
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
              onOpen("editTime", {
                id,
                img,
                timestart,
                timeend,
                location,
              })
            }
          >
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              onOpen("deleteTime", {
                id,
                img,
                timestart,
                timeend,
                location,
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
