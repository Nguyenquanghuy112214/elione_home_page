"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RegisterSchema } from "@/schemas";
import { register } from "@/actions/register";

function RegisterPage() {
  const router = useRouter();
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
  });
  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof RegisterSchema>) => {
    try {
      const res = await register(values);
      if (!!res.success) {
        toast.success("Đăng ký thành công");
      } else {
        toast.error("Email đã tồn tại");
      }
      form.reset();
      // router.push("/");
    } catch (error: any) {
      toast.error("Đăng ký thất bại");
    }
  };
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl border">
        <div className=" flex items-center justify-center">
          <Image
            width={180}
            height={180}
            src={"https://elione.bkt.net.vn/Content/images/logo-wide.png"}
            alt="avt"
          />
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" block text-sm font-semibold text-gray-800">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      className=" block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-[1px] border-solid border-[#ccc] rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      disabled={isSubmitting}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" block text-sm font-semibold text-gray-800">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      className=" block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-[1px] border-solid border-[#ccc] rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      disabled={isSubmitting}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center gap-x-2 justify-center">
              <Button
                className=" w-full"
                variant="secondary"
                disabled={!isValid || isSubmitting}
                type="submit"
              >
                Đăng ký
              </Button>
            </div>
            <p className="mt-4 text-sm text-center text-gray-700">
              Bạn đã có tài khoản?
              <Link
                href="/login"
                className="font-medium text-blue-600 hover:underline ml-2"
              >
                Đăng nhập
              </Link>
            </p>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default RegisterPage;
