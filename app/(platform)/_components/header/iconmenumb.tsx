"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

function IconMenuMb({
  active,
  setIsMenuOpen,
}: {
  active: boolean;
  setIsMenuOpen: () => void;
}) {
  return (
    <div>
      <div
        onClick={() => setIsMenuOpen()}
        className={cn("show-menu", "nav__toggler")}
      >
        <div
          className={
            active ? cn("line1", "active") : cn("line1")
          }
        ></div>
        <div
          className={
            active ? cn("line2", "active") : cn("line2")
          }
        ></div>
        <div
          className={
            active ? cn("line3", "active") : cn("line3")
          }
        ></div>
      </div>
    </div>
  );
}

export default IconMenuMb;
