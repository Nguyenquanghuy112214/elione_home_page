"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";

import "react-quill/dist/quill.bubble.css";
import { InterVF } from "./fonts_application/fonts";

interface PreviewProps {
  value: string;
}

export const PreviewReactQuill = ({ value }: PreviewProps) => {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  return (
    <ReactQuill style={{fontFamily:InterVF.className!}} className={` !text-base !${InterVF.className}`} theme="bubble" value={value} readOnly />
  );
};
