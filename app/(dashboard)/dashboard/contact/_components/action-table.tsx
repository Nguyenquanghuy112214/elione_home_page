"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useModalContact } from "@/hooks/use-modal-contact";
import { useModalEvaluate } from "@/hooks/use-modal-evaluate";
import { MoreHorizontal } from "lucide-react";
import React from "react";

function ActionTable({
  id,
  logo,
  sublogo,
  slogan,
  namecompany,
  addresscompany,
  namecenter,
  addresscenter,
  mail,
  phone,
}: {
  id: string;
  logo: string;
  sublogo: string;
  slogan: string;
  namecompany: string;
  addresscompany: string;
  namecenter: string;
  addresscenter: string;
  mail: string;
  phone: string;
}) {
  const { onOpen } = useModalContact();
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
              onOpen("editContact", {
                id,
                logo,
                sublogo,
                slogan,
                namecompany,
                addresscompany,
                namecenter,
                addresscenter,
                mail,
                phone,
              })
            }
          >
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              onOpen("deleteContact", {
                id,
                logo,
                sublogo,
                slogan,
                namecompany,
                addresscompany,
                namecenter,
                addresscenter,
                mail,
                phone,
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
