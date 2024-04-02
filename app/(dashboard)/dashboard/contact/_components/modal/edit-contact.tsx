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
import { editContactSchema, editEvaluateSchema } from "@/schemas";
import { useEffect } from "react";
import { editContact } from "@/actions/editContact";
import { useModalContact } from "@/hooks/use-modal-contact";

export const EditContactModal = () => {
  const { isOpen, onClose, type, data } = useModalContact();
  const {
    id,
    logo,
    sublogo,
    slogan,
    namecompany,
    addresscompany,
    namecenter,
    addresscenter,
    mail,
    phone,
  } = data;

  const form = useForm({
    resolver: zodResolver(editContactSchema),
    defaultValues: {
      id,
      logo,
      sublogo,
      slogan,
      namecompany,
      addresscompany,
      namecenter,
      addresscenter,
      mail,
      phone,
    },
  });
  useEffect(() => {
    form.setValue("id", id);
    form.setValue("logo", logo);
    form.setValue("sublogo", sublogo);
    form.setValue("slogan", slogan);
    form.setValue("namecompany", namecompany);
    form.setValue("addresscompany", addresscompany);
    form.setValue("namecenter", namecenter);
    form.setValue("addresscenter", addresscenter);
    form.setValue("mail", mail);
    form.setValue("phone", phone);
  }, [
    form,
    id,
    logo,
    sublogo,
    slogan,
    namecompany,
    addresscompany,
    namecenter,
    addresscenter,
    mail,
    phone,
  ]);

  const { getRootProps } = useDropzone({
    accept: {
      "image/jpeg": [".jpeg", ".png"],
    },
    onDrop: async (file) => {
      const data = new FormData();
      data.append("file", file[0]);
      const res = await axios.post("http://resource.bksgroup.vn/upload", data);
      form.setValue("logo", res.data.file_url);
    },
  });
  const { getRootProps: getSubLogoRootProps } = useDropzone({
    accept: {
      "image/jpeg": [".jpeg", ".png"],
    },
    onDrop: async (file) => {
      const data = new FormData();
      data.append("file", file[0]);
      const res = await axios.post("http://resource.bksgroup.vn/upload", data);
      form.setValue("sublogo", res.data.file_url);
    },
  });

  const isModalOpen = isOpen && type === "editContact";

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof editContactSchema>) => {
    try {
      //   api
      const res = await editContact(values);
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
            Edit Contact
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="px-6 grid grid-cols-3 gap-5">
              <div className=" col-span-1 space-y-3">
                <FormField
                  control={form.control}
                  name="slogan"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                        Slogan
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
                  )}
                />

                <FormField
                  control={form.control}
                  name="mail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                        Email
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
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                        Phone
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
                  )}
                />
              </div>
              <div className=" col-span-1 space-y-3">
                <FormField
                  control={form.control}
                  name="namecompany"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                        Tên công ty
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
                  )}
                />
                <FormField
                  control={form.control}
                  name="addresscompany"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                        Địa chỉ công ty
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
                  )}
                />
                <FormField
                  control={form.control}
                  name="namecenter"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                        Tên trung tâm
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
                  )}
                />
                <FormField
                  control={form.control}
                  name="addresscenter"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                        Địa chỉ trung tâm
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
                  )}
                />
              </div>
              <div className=" col-span-1">
                <FormField
                  control={form.control}
                  name="logo"
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
                  name="sublogo"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="  uppercase text-xs font-bold text-zinc-500 dark:text-secondary/">
                          Image
                        </FormLabel>
                        <FormControl>
                          <div
                            {...getSubLogoRootProps({})}
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
