"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useModalInfomation } from "@/hooks/use-modal-store-information";
import { useModalWhyChoose } from "@/hooks/use-modal-store-why-choose";
import { MoreHorizontal } from "lucide-react";
import React from "react";

function ActionTable({
  id,
  img,
  title,
  description,
}: {
  id: string;
  img: string;
  title: string;
  description: string;
}) {
  const { onOpen } = useModalInfomation();
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
              onOpen("editInformation", {
                id,
                img,
                title,
                description,
              })
            }
          >
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              onOpen("deleteInformation", {
                id,
                img,
                title,
                description,
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
