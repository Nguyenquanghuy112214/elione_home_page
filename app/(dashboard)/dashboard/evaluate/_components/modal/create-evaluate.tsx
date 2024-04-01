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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import toast from "react-hot-toast";
import { createEvaluateSchema } from "@/schemas";
import { createEvaluate } from "@/actions/createEvaluate";
import { useModalEvaluate } from "@/hooks/use-modal-evaluate";

export const CreateEvaluateModal = () => {
  const form = useForm({
    resolver: zodResolver(createEvaluateSchema),
    defaultValues: {
      img: "",
      video: "",
      title: "",
      star: "",
      parentstudent: "",
      achievements: "",
      class_g: "",
    },
  });

  const { getRootProps } = useDropzone({
    accept: {
      "image/jpeg": [".jpeg", ".png"],
    },
    maxFiles: 1,
    onDrop: async (file) => {
      const data = new FormData();
      data.append("file", file[0]);
      const res = await axios.post("http://resource.bksgroup.vn/upload", data);
      form.setValue("img", res.data.file_url);
      console.log("heheh");
    },
  });
  const { getRootProps: getVideoRootProps } = useDropzone({
    accept: { "video/mp4": [".mp4", ".MP4"] },
    maxFiles: 1,

    onDrop: async (file) => {
      const data = new FormData();
      data.append("file", file[0]);
      const res = await axios.post("http://resource.bksgroup.vn/upload", data);
      form.setValue("video", res.data.file_url);
      console.log("heheh");
    },
  });

  const { isOpen, onClose, type } = useModalEvaluate();

  const isModalOpen = isOpen && type === "createEvaluate";

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof createEvaluateSchema>) => {
    console.log("values",values);
    
    try {
      const res = await createEvaluate(values);

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
      <DialogContent className="bg-white text-black p-0 max-w-3xl max-h-[98vh] overflow-y-scroll overflow-x-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Create Evaluate
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="px-6 grid grid-cols-2 gap-5">
              <div className=" col-span-1 space-y-3">
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
                  name="star"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                        Đánh giá
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
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
                  name="parentstudent"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                        Phụ huynh học viên
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
                  name="achievements"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                        Thành tích
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
                  name="class_g"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                        Lớp học
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
              <div className=" col-span-1">
                <FormField
                  control={form.control}
                  name="img"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="  uppercase text-xs font-bold text-zinc-500 dark:text-secondary/">
                        ThumbUrl
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
                <FormField
                  control={form.control}
                  name="video"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="  uppercase text-xs font-bold text-zinc-500 dark:text-secondary/">
                        Video
                      </FormLabel>
                      <FormControl>
                        {!field.value ? (
                          <div className="container">
                            <div
                              {...getVideoRootProps({
                                className:
                                  "cursor-pointer dropzone w-full h-[200px] border-solid border-[1px] border-black border-dashed rounded-md flex items-center justify-center text-text_h5",
                              })}
                            >
                              Chọn video
                            </div>
                          </div>
                        ) : (
                          <div
                            {...getVideoRootProps({})}
                            className="relative aspect-video mt-2 h-[200px] w-full"
                          >
                            <video
                              className="w-full h-full object-cover rounded-md border shadow-sm"
                              controls
                            >
                              <source src={field.value} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          </div>
                        )}
                      </FormControl>
                      <FormMessage className=" ml-2.5" />
                    </FormItem>
                  )}
                />
              </div>
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
