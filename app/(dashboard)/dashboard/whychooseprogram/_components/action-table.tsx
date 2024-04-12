"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useModalWhyChooseProgram } from "@/hooks/use-modal-store-why-choose-program";
import { MoreHorizontal } from "lucide-react";
import React from "react";

function ActionTable({
  id,
  img,
  subimg,
  title1,
  title2,
  title3,
  description,
}: {
  id: string;
  img: string;
  subimg: string;
  title3: string;
  title1: string;
  title2: string;
  description: string;
}) {
  const { onOpen } = useModalWhyChooseProgram();
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
              onOpen("editWhyChooseProgram", {
                id,
                img,
                subimg,
                title1,
                title2,
                title3,
                description,
              })
            }
          >
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              onOpen("deleteWhyChooseProgram", {
                id,
                img,
                subimg,
                title1,
                title2,
                title3,
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
