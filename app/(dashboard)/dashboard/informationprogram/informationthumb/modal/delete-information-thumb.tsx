"use client";

import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { useModalProcess } from "@/hooks/use-modal-store-process";
import { deleteProcess } from "@/actions/deleteProcess";
import { deleteInformationThumb } from "@/actions/deleteInformationThumb";

export const DeleteInformationThumbModal = () => {
  const { isOpen, onClose, type, data } = useModalProcess();

  const isModalOpen = isOpen && type === "deleteInformationThumb";
  const { id, img,title } = data;

  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);
      const res = await deleteInformationThumb({ id });
      if (!!res.success) {
        toast.success("Xóa thành công");
      } else {
        toast.success("Xóa thất bại");
      }
      onClose();
    } catch (error) {
      toast.success("Xóa thất bại");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black p-0 ">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Delete InformationThumb
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500">
            Bạn có chắc chắn xóa? <br />
            <span className="text-indigo-500 font-semibold">{title}</span> sẽ bị
            xóa
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="bg-gray-100 px-6 py-4">
          <div className="flex items-center justify-between w-full">
            <Button disabled={isLoading} onClick={onClose} variant="destructive">
              Hủy
            </Button>
            <Button disabled={isLoading} variant="secondary" onClick={onClick}>
              Xác nhận
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
