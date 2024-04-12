"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import Image from "next/image";

import toast from "react-hot-toast";
import { createScheduleSchema } from "@/schemas";
import { createProcess } from "@/actions/createProcess";
import { useModalProcess } from "@/hooks/use-modal-store-process";
import { Input } from "@/components/ui/input";
import { createTarget } from "@/actions/createTarget";
import { useModalTarget } from "@/hooks/use-modal-store-target";

export const CreateTargetModal = () => {
  const form = useForm({
    resolver: zodResolver(createScheduleSchema),
    defaultValues: {
      title: "",
    },
  });


  const { isOpen, onClose, type } = useModalTarget();

  const isModalOpen = isOpen && type === "createTarget";

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof createScheduleSchema>) => {
    try {
      const res = await createTarget(values);

      if (!!res.success) {
        toast.success("Thêm mới thành công");
      } else {
        toast.error("Thêm mới thất bại");
      }

      form.reset();
      //   router.refresh();
      onClose();
    } catch (error) {
      toast.error("Thêm mới thất bại");

      console.log(error);
    }
  };

  const handleClose = () => {
    form.reset();
    onClose();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-white text-black p-0 max-w-3xl">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Create Target
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="px-6 flex flex-col gap-y-5">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                      Title
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                        placeholder="Enter title"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
             
            </div>
            <DialogFooter className="bg-gray-100 px-6 py-4">
              <Button variant="secondary" disabled={isLoading}>
                Create
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
