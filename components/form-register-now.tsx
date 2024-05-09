"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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

import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";
import { createExcellent } from "@/actions/createExcellent";
import { useModalRegisterNow } from "@/hooks/use-modal-store-register-now";
import { createRegisterNowSchema } from "@/schemas";
import { Textarea } from "./ui/textarea";

export const CreateRegisterNowModal = () => {
  const form = useForm({
    resolver: zodResolver(createRegisterNowSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      age: "",
      question: "",
    },
  });

  const { isOpen, onClose, type } = useModalRegisterNow();

  const isModalOpen = isOpen && type === "createRegisterNow";

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof createRegisterNowSchema>) => {
    try {
        console.log("values",values);
        
      //   const res = await createExcellent(values);

      //   if (!!res.success) {
      //     toast.success("Thêm mới thành công");
      //   } else {
      //     toast.error("Thêm mới thất bại");
      //   }

      form.reset();
      //   router.refresh();
    //   onClose();
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
      <DialogContent className=" text-white bg-secondary py-2 px-10 max-w-lg max-h-[90vh] !rounded-[50px] overflow-auto ">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className=" text-center ">
            <div className=" uppercase text-[24px] mb-3">
              Tìm hiểu thông tin trại hè
            </div>
            <div className="text-center text-[17px] leading-6">
              Để được tư vấn về thông tin trại hè 2024,
              <br />
              mời Quý phụ huynh điền thông tin tại đây
            </div>
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="px-6 flex flex-col gap-y-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className="bg-white border-0 focus-visible:ring-0 rounded-xl text-black text-center font-medium focus-visible:ring-offset-0 placeholder:text-center placeholder:text-[#5e5b5b] placeholder:text-[16px]"
                        placeholder="Họ và Tên"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className="bg-white border-0 focus-visible:ring-0 rounded-xl text-black text-center font-medium focus-visible:ring-offset-0 placeholder:text-center placeholder:text-[#5e5b5b] placeholder:text-[16px]"
                        placeholder="Email"
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
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className="bg-white border-0 focus-visible:ring-0 rounded-xl text-black text-center font-medium focus-visible:ring-offset-0 placeholder:text-center placeholder:text-[#5e5b5b] placeholder:text-[16px]"
                        placeholder="Số điện thoại"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                      type="number"
                        disabled={isLoading}
                        className="bg-white border-0 focus-visible:ring-0 rounded-xl text-black text-center font-medium focus-visible:ring-offset-0 placeholder:text-center placeholder:text-[#5e5b5b] placeholder:text-[16px]"
                        placeholder="Tuổi của con"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="question"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        disabled={isLoading}
                        className="bg-white border-0 focus-visible:ring-0 rounded-xl text-black text-center font-medium focus-visible:ring-offset-0 placeholder:text-center placeholder:text-[#5e5b5b] placeholder:text-[16px]"
                        placeholder="Câu hỏi dành cho Elione"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter className="px-6 pb-4">
              <Button  disabled={isLoading} className=" rounded-xl uppercase w-full bg-gradient-to-b from-[#fdd558] to-[#fdb250] text-[#b00d05] !font-bold text-[20px]">
                Đăng ký ngay
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
