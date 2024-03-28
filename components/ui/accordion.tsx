"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<
    typeof AccordionPrimitive.Item
  >
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "mb-3 border-[1px] border-text_title border-solid p-1 w-full rounded-xl transition-transform duration-200 ",
      className
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<
    typeof AccordionPrimitive.Trigger
  >
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex items-center justify-start gap-3 p-1 w-full rounded-lg font-medium transition-all text-[22px] text-start text-text_h5 [&[data-state=open]>svg]:rotate-90 [&[data-state=open]>svg]:bg-primary data-[state=open]:bg-secondary data-[state=open]:text-white ",
        className
      )}
      {...props}
    >
      <ChevronRight
        width={37}
        height={37}
        className=" rounded-lg shrink-0  transition-transform duration-200 bg-secondary text-white "
      />

      {children}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName =
  AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<
    typeof AccordionPrimitive.Content
  >
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className=" overflow-hidden text-[19px] text-text_h5 transition-all   data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down "
    {...props}
  >
    <div className={cn("px-5 py-7", className)}>
      {children}
    </div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName =
  AccordionPrimitive.Content.displayName;

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
};
