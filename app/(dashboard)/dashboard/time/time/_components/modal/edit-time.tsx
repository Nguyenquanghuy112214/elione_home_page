"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import { addDays, format } from "date-fns";

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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import toast from "react-hot-toast";
import { editTimeSchema } from "@/schemas";
import React, { useEffect } from "react";
import { editTime } from "@/actions/editTime";
import { useModalTime } from "@/hooks/use-modal-time";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { DateRange } from "react-day-picker";

export const EditTimeModal = () => {
  const { isOpen, onClose, type, data } = useModalTime();
  const { location, timestart, timeend, img, id } = data;

  const [date, setDate] = React.useState<DateRange | undefined>({
    from: timestart,
    to: timeend,
  });
  useEffect(() => {
    setDate({ from: timestart, to: timeend });
  }, [timestart, timeend]);

  const form = useForm({
    resolver: zodResolver(editTimeSchema),
    defaultValues: {
      location,
      timestart,
      timeend,
      img,
      id,
    },
  });
  useEffect(() => {
    form.setValue("id", id);
    form.setValue("timestart", timestart);
    form.setValue("timeend", timeend);
    form.setValue("location", location);
    form.setValue("img", img);
  }, [form, location, timestart, timeend, img, id]);

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

  const isModalOpen = isOpen && type === "editTime";

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof editTimeSchema>) => {
    let valuesUpdate = {
      id: values.id,
      img: values.img,
      timestart: date?.from as Date,
      timeend: date?.to as Date,
      location: values.location,
    };
    try {
      //   api
      const res = await editTime(valuesUpdate);
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
            Edit Time
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="px-6 flex flex-col gap-y-5">
              <FormField
                control={form.control}
                name="timestart"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                      StartOnDate - EndOndDate
                    </FormLabel>
                    <FormControl>
                      <div className={cn("grid gap-2")}>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              id="date"
                              variant={"outline"}
                              className={cn(
                                "w-[300px] justify-start text-left font-normal border-[1px] border-solid border-[#000000a6]",
                                !date && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4 " />
                              {date?.from ? (
                                date.to ? (
                                  <>
                                    {format(date.from, "LLL dd, y")} -{" "}
                                    {format(date.to, "LLL dd, y")}
                                  </>
                                ) : (
                                  format(date.from, "LLL dd, y")
                                )
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent
                            className="w-auto p-0 bg-white"
                            align="start"
                          >
                            <Calendar
                              initialFocus
                              mode="range"
                              defaultMonth={date?.from}
                              selected={date}
                              onSelect={setDate}
                              numberOfMonths={2}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                      Adress
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
