"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useModalEvaluate } from "@/hooks/use-modal-evaluate";
import { MoreHorizontal } from "lucide-react";
import React from "react";

function ActionTable({
  id,
  video,
  img,
  title,
  star,
  parentstudent,
  achievements,
  class_g,
}: {
  id: string;
  img: string;
  video: string;
  title: string;
  star: string;
  parentstudent: string;
  achievements: string;
  class_g: string;
}) {
  const { onOpen } = useModalEvaluate();
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
              onOpen("editEvaluate", {
                id,
                video,
                img,
                title,
                star,
                parentstudent,
                achievements,
                class_g,
              })
            }
          >
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              onOpen("deleteEvaluate", {
                id,
                video,
                img,
                title,
                star,
                parentstudent,
                achievements,
                class_g,
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
