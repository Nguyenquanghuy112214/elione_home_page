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
import { editCourseSchema } from "@/schemas";
import { useEffect } from "react";
import { useModalCourse } from "@/hooks/use-modal-course";
import { editCourse } from "@/actions/editCourse";

export const EditCourseModal = () => {
  const { isOpen, onClose, type, data } = useModalCourse();
  const {
    id,
    img,
    video,
    title,
    timestart,
    countclass,
    countstudent,
    timelearn,
    calendar,
  } = data;

  const form = useForm({
    resolver: zodResolver(editCourseSchema),
    defaultValues: {
      id,
      img,
      video,
      title,
      timestart,
      countclass,
      countstudent,
      timelearn,
      calendar,
    },
  });
  useEffect(() => {
    form.setValue("id", id);
    form.setValue("img", img);
    form.setValue("video", video);
    form.setValue("title", title);
    form.setValue("timestart", timestart);
    form.setValue("countclass", countclass);
    form.setValue("countstudent", countstudent);
    form.setValue("timelearn", timelearn);
    form.setValue("calendar", calendar);
  }, [
    form,
    id,
    img,
    video,
    title,
    timestart,
    countclass,
    countstudent,
    timelearn,
    calendar,
  ]);

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

  const isModalOpen = isOpen && type === "editCourse";

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof editCourseSchema>) => {
    try {
      //   api
      const res = await editCourse(values);
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
            Edit Course
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
                  name="timestart"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                          Thời gian học
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
                  name="countclass"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                          Số lớp học
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
                  name="countstudent"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                          Số học sinh
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
                  name="timelearn"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                          Thời lượng học
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
                  name="calendar"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                          Lịch mở lớp
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
                    console.log("field",field);
                    
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
