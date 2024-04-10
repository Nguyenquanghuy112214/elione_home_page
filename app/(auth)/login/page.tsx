"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import toast from "react-hot-toast";
import { LoginSchema } from "@/schemas";
import { login } from "@/actions/login";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { signIn } from "next-auth/react";
// import { signIn } from "@/auth";

function LoginPage() {
  const router = useRouter();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
  });
  const { isSubmitting, isValid } = form.formState;
  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    // console.log("values", values);

    try {
      console.log("try");
      signIn("credentials", {
        email: values.email,
        password: values.password,
        callbackUrl: DEFAULT_LOGIN_REDIRECT,
      });

      console.log("res");

      // const res = await login(values);
      // if (!!res?.error) {
      //   toast.error("Tên đăng nhập hoặc mật khẩu chưa chính xác");
      // } else {
      //   toast.success("Đăng nhập thành công");
      // }

      // router.push("/");
      router.refresh();
    } catch (error: any) {
      toast.error("Đăng nhập thất bại");
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

            <div className="flex items-center gap-x-2 justify-end">
              <Button
                className=" w-full"
                variant="secondary"
                disabled={!isValid || isSubmitting}
                type="submit"
              >
                Đăng nhập
              </Button>
            </div>
            <p className="mt-4 text-sm text-center text-gray-700">
              Chưa có tài khoản?
              <Link
                href="/register"
                className="font-medium text-blue-600 hover:underline ml-2"
              >
                Đăng ký
              </Link>
            </p>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default LoginPage;
