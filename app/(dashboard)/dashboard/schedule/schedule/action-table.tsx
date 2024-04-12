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
import { MoreHorizontal } from "lucide-react";
import React from "react";

function ActionTable({
  id,
  title,
  img,
}: {
  id: string;
  img: string;
  title: string;
}) {
  const { onOpen } = useModalSchedule();
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
              onOpen("editSchedule", {
                id,
                title
              })
            }
          >
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              onOpen("deleteSchedule", {
                id,
                title
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
