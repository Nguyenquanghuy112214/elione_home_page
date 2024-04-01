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
import {  editEvaluateSchema } from "@/schemas";
import { useEffect } from "react";
import { useModalEvaluate } from "@/hooks/use-modal-evaluate";
import { editEvaluate } from "@/actions/editEvaluate";

export const EditValuateModal = () => {
  const { isOpen, onClose, type, data } = useModalEvaluate();
  const { id, img, video, title, star, parentstudent, achievements, class_g } =
    data;

  const form = useForm({
    resolver: zodResolver(editEvaluateSchema),
    defaultValues: {
      id,
      img,
      video,
      title,
      star,
      parentstudent,
      achievements,
      class_g,
    },
  });
  useEffect(() => {
    form.setValue("id", id);
    form.setValue("img", img);
    form.setValue("video", video);
    form.setValue("title", title);
    form.setValue("star", star);
    form.setValue("parentstudent", parentstudent);
    form.setValue("achievements", achievements);
    form.setValue("class_g", class_g);
  }, [form, id, img, video, title, star, parentstudent, achievements, class_g]);

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
  const { getRootProps: getVideoRootProps } = useDropzone({
    accept: { "video/mp4": [".mp4"] },
    maxFiles: 1,
    onDrop: async (acceptedFiles) => {
      const file = acceptedFiles[0];
      const videoData = new FormData();
      videoData.append("file", file);
      const res = await axios.post(
        "http://resource.bksgroup.vn/upload",
        videoData
      );
      console.log("setvideo");

      // Cập nhật giá trị của trường video trong form
      form.setValue("video", res.data.file_url);
    },
  });

  const isModalOpen = isOpen && type === "editEvaluate";

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof editEvaluateSchema>) => {
    try {
      //   api
      const res = await editEvaluate(values);
      if (!!res.success) {
        toast.success("Thay đổi thành công");
      } else {
        toast.error("Thay đổi thất bại");
      }
      form.reset();
      //   router.refresh();
      onClose();
    } catch (error) {
      toast.error("Thay đổi thất bại");
      console.log(error);
    }
  };

  const handleClose = () => {
    form.reset();
    onClose();
    // setUrl(null);
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-white text-black p-0 max-w-3xl">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Edit Evaluate
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="px-6 grid grid-cols-2 gap-5">
              <div className=" col-span-1 space-y-3">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                          Title
                        </FormLabel>
                        <FormControl>
                          <Input
                            defaultValue={field.value}
                            disabled={isLoading}
                            className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                            placeholder="Enter title"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="star"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                          Đánh giá
                        </FormLabel>
                        <FormControl>
                          <Input
                            defaultValue={field.value}
                            disabled={isLoading}
                            className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                            placeholder="Enter title"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="parentstudent"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                          Phụ huynh học sinh
                        </FormLabel>
                        <FormControl>
                          <Input
                            defaultValue={field.value}
                            disabled={isLoading}
                            className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                            placeholder="Enter title"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="achievements"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                          Thành tích
                        </FormLabel>
                        <FormControl>
                          <Input
                            defaultValue={field.value}
                            disabled={isLoading}
                            className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                            placeholder="Enter title"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="class_g"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                          Lớp học
                        </FormLabel>
                        <FormControl>
                          <Input
                            defaultValue={field.value}
                            disabled={isLoading}
                            className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                            placeholder="Enter title"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
               
              </div>
              <div className=" col-span-1">
                <FormField
                  control={form.control}
                  name="img"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="  uppercase text-xs font-bold text-zinc-500 dark:text-secondary/">
                          Image
                        </FormLabel>
                        <FormControl>
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
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="video"
                  render={({ field }) => {
                    console.log("field", field);

                    return (
                      <FormItem>
                        <FormLabel className="  uppercase text-xs font-bold text-zinc-500 dark:text-secondary/">
                          Video
                        </FormLabel>
                        <FormControl>
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
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>
            </div>
            <DialogFooter className="bg-gray-100 px-6 py-4">
              <Button variant="secondary" disabled={isLoading}>
                Edit
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
