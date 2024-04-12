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
import { editWhyChooseProgramSchema } from "@/schemas";
import { EditorReactQuill } from "@/components/editor-reactquill";
import { useEffect } from "react";
import { useModalWhyChooseProgram } from "@/hooks/use-modal-store-why-choose-program";
import { editWhyChooseProgram } from "@/actions/editWhyChooseProgram";

export const EditWhyChooseProgramModal = () => {
  const { isOpen, onClose, type, data } = useModalWhyChooseProgram();
  const { title1, title2, title3, description,subimg, img, id } = data;

  const form = useForm({
    resolver: zodResolver(editWhyChooseProgramSchema),
    defaultValues: {
      title1,
      title2,
      title3,
      description,
      img,
      id,
      subimg
    },
  });
  useEffect(() => {
    form.setValue("id", id);
    form.setValue("title1", title1);
    form.setValue("title2", title2);
    form.setValue("title3", title3);
    form.setValue("description", description);
    form.setValue("img", img);
    form.setValue("subimg", subimg);
  }, [form, title1, title2, title3, description, img,subimg, id]);

  const { getRootProps } = useDropzone({
    accept: {
      "image/jpeg": [".jpeg", ".png", ".svg"],
    },
    onDrop: async (file) => {
      const data = new FormData();
      data.append("file", file[0]);
      const res = await axios.post("http://resource.bksgroup.vn/upload", data);
      form.setValue("img", res.data.file_url);
    },
  });
  const { getRootProps:subgetRootProps } = useDropzone({
    accept: {
      "image/jpeg": [".jpeg", ".png", ".svg"],
    },
    onDrop: async (file) => {
      const data = new FormData();
      data.append("file", file[0]);
      const res = await axios.post("http://resource.bksgroup.vn/upload", data);
      form.setValue("subimg", res.data.file_url);
    },
  });

  const isModalOpen = isOpen && type === "editWhyChooseProgram";

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof editWhyChooseProgramSchema>) => {
    try {
      //   api
      const res = await editWhyChooseProgram(values);
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
            Edit WhyChooseProgram
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="px-6 grid grid-cols-2 gap-5">
              <div className=" col-span-1 space-y-3">
                <FormField
                  control={form.control}
                  name="title1"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                          Title1
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
                  name="title2"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                          Title2
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
                  name="title3"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                          Title3
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
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                        Description
                      </FormLabel>
                      <FormControl>
                        <EditorReactQuill {...field} />
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
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="  uppercase text-xs font-bold text-zinc-500 dark:text-secondary/">
                          ThumbUrl
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
                  name="subimg"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="  uppercase text-xs font-bold text-zinc-500 dark:text-secondary/">
                          subThumbUrl
                        </FormLabel>
                        <FormControl>
                          <div
                            {...subgetRootProps({})}
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
