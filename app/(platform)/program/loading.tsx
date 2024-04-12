"use client";
import React from "react";
import { HashLoader } from "react-spinners";
import { motion, AnimatePresence } from "framer-motion";
function LoadingModal({ loading }: { loading: boolean }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className=" fixed top-0 left-0 right-0 bottom-0 bg-slate-950 z-[1000] flex items-center justify-center"
        >
          <HashLoader size={80} color="white" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingModal;
