import * as z from "zod";

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Vui lòng nhập Email",
  }),
  password: z.string().min(6, {
    message: "Vui lòng nhập ít nhất 6 kí tự",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Vui lòng nhập Email",
  }),
  password: z.string().min(1, {
    message: "Vui lòng nhập mật khẩu",
  }),
});

export const createWhyChooseSchema = z.object({
  title: z.string().min(1, {
    message: "Vui lòng nhập tiêu đề",
  }),
  description: z.string().min(1, {
    message: "Vui lòng nhập mô tả",
  }),
  img: z.string().min(1, {
    message: "Vui lòng chọn ảnh",
  }),
});

export const editWhyChooseSchema = z.object({
  id: z.string().min(1, {
    message: "Vui lòng nhập id",
  }),
  title: z.string().min(1, {
    message: "Vui lòng nhập tiêu đề",
  }),
  description: z.string().min(1, {
    message: "Vui lòng nhập mô tả",
  }),
  img: z.string().min(1, {
    message: "Vui lòng chọn ảnh",
  }),
});

export const createProcessSchema = z.object({
  img: z.string().min(1, {
    message: "Vui lòng nhập ảnh",
  }),
  title: z.string().min(1, {
    message: "Vui lòng nhập tiêu đề",
  }),
});

export const editProcessSchema = z.object({
  id: z.string().min(1, {
    message: "Vui lòng nhập id",
  }),
  img: z.string().min(1, {
    message: "Vui lòng nhập ảnh",
  }),
  title: z.string().min(1, {
    message: "Vui lòng nhập tiêu đề",
  }),
});
