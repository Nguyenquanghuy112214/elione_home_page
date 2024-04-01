"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useModalCourse } from "@/hooks/use-modal-course";
import { MoreHorizontal } from "lucide-react";
import React from "react";

function ActionTable({
  id,
  img,
  video,
  title,
  timestart,
  countclass,
  countstudent,
  timelearn,
  calendar,
}: {
  id: string;
  img: string;
  video: string;
  title: string;
  timestart: string;
  countclass: string;
  countstudent: string;
  timelearn: string;
  calendar: string;
}) {
  const { onOpen } = useModalCourse();
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
              onOpen("editCourse", {
                id,
                img,
                video,
                title,
                timestart,
                countclass,
                countstudent,
                timelearn,
                calendar,
              })
            }
          >
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              onOpen("deleteCourse", {
                id,
                img,
                video,
                title,
                timestart,
                countclass,
                countstudent,
                timelearn,
                calendar,
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
