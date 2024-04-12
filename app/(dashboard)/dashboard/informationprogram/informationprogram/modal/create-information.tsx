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
import { createProcessSchema } from "@/schemas";
import { createProcess } from "@/actions/createProcess";
import { useModalProcess } from "@/hooks/use-modal-store-process";
import { Input } from "@/components/ui/input";
import { createInformationProgram } from "@/actions/createInformationProgram";

export const CreateInformationProgramModal = () => {
  const form = useForm({
    resolver: zodResolver(createProcessSchema),
    defaultValues: {
      img: "",
      title: "",
    },
  });

  const { getRootProps } = useDropzone({
    accept: {
      "image/jpeg": [".jpeg", ".png"],
    },
    onDrop: async (file) => {
      const data = new FormData();
      data.append("file", file[0]);
      const res = await axios.post("http://resource.bksgroup.vn/upload", data);
      form.setValue("img", res.data.file_url);
    },
  });
  const { isOpen, onClose, type } = useModalProcess();

  const isModalOpen = isOpen && type === "createInformationProgram";

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof createProcessSchema>) => {
    try {
      const res = await createInformationProgram(values);

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
            Create InformationProgram
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
              <FormField
                control={form.control}
                name="img"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="  uppercase text-xs font-bold text-zinc-500 dark:text-secondary/">
                      Img
                    </FormLabel>
                    <FormControl>
                      {!field.value ? (
                        <div className="container">
                          <div
                            {...getRootProps({
                              className:
                                "cursor-pointer dropzone w-full h-[200px] border-solid border-[1px] border-black border-dashed rounded-md flex items-center justify-center text-text_h5",
                            })}
                          >
                            Chọn ảnh
                          </div>
                        </div>
                      ) : (
                        <div
                          {...getRootProps({})}
                          className="relative aspect-video mt-2 h-[200px] w-full"
                        >
                          <Image
                            fill
                            className="object-cover rounded-md border shadow-sm"
                            src={field.value}
                            alt="anh"
                          />
                        </div>
                      )}
                    </FormControl>
                    <FormMessage className=" ml-2.5" />
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
