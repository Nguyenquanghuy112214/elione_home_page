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

export const createCourseSchema = z.object({
  title: z.string().min(1, {
    message: "Vui lòng nhập tiêu đề",
  }),

  img: z.string().min(1, {
    message: "Vui lòng chọn ảnh",
  }),
  video: z.string().min(1, {
    message: "Vui lòng nhập video",
  }),
  timestart: z.string().min(1, {
    message: "Vui lòng nhập thời gian học",
  }),
  countclass: z.string().min(1, {
    message: "Vui lòng nhập số lượng lớp học",
  }),
  countstudent: z.string().min(1, {
    message: "Vui lòng nhập số lượng học sinh",
  }),
  timelearn: z.string().min(1, {
    message: "Vui lòng nhập thời lượng học",
  }),
  calendar: z.string().min(1, {
    message: "Vui lòng nhập lịch mở lớp",
  }),
});

export const editCourseSchema = z.object({
  id: z.string().min(1, {
    message: "Vui lòng nhập id",
  }),
  title: z.string().min(1, {
    message: "Vui lòng nhập tiêu đề",
  }),

  img: z.string().min(1, {
    message: "Vui lòng chọn ảnh",
  }),
  video: z.string().min(1, {
    message: "Vui lòng nhập video",
  }),
  timestart: z.string().min(1, {
    message: "Vui lòng nhập thời gian học",
  }),
  countclass: z.string().min(1, {
    message: "Vui lòng nhập số lượng lớp học",
  }),
  countstudent: z.string().min(1, {
    message: "Vui lòng nhập số lượng học sinh",
  }),
  timelearn: z.string().min(1, {
    message: "Vui lòng nhập thời lượng học",
  }),
  calendar: z.string().min(1, {
    message: "Vui lòng nhập lịch mở lớp",
  }),
});

//
export const createEvaluateSchema = z.object({
  title: z.string().min(1, {
    message: "Vui lòng nhập tiêu đề",
  }),

  img: z.string().min(1, {
    message: "Vui lòng chọn ảnh",
  }),
  video: z.string().min(1, {
    message: "Vui lòng nhập video",
  }),
  star: z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
    message: "Vui lòng nhập số"
  }),
  parentstudent: z.string().min(1, {
    message: "Vui lòng nhập tên học sinh",
  }),
  achievements: z.string().min(1, {
    message: "Vui lòng nhập thành tích",
  }),
  class_g: z.string().min(1, {
    message: "Vui lòng nhập lớp",
  }),
});

export const editEvaluateSchema = z.object({
  id: z.string().min(1, {
    message: "Vui lòng nhập id",
  }),
  title: z.string().min(1, {
    message: "Vui lòng nhập tiêu đề",
  }),

  img: z.string().min(1, {
    message: "Vui lòng chọn ảnh",
  }),
  video: z.string().min(1, {
    message: "Vui lòng nhập video",
  }),
  star: z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
    message: "Vui lòng nhập số"
  }),
  parentstudent: z.string().min(1, {
    message: "Vui lòng nhập tên học sinh",
  }),
  achievements: z.string().min(1, {
    message: "Vui lòng nhập thành tích",
  }),
  class_g: z.string().min(1, {
    message: "Vui lòng nhập lớp",
  }),
});

//
export const createContactSchema = z.object({
  slogan: z.string().min(1, {
    message: "Vui lòng nhập slogan",
  }),

  logo: z.string().min(1, {
    message: "Vui lòng chọn logo",
  }),
  sublogo: z.string().min(1, {
    message: "Vui lòng chọn sublogo",
  }),

  namecompany: z.string().min(1, {
    message: "Vui lòng nhập tên công ty",
  }),
  addresscompany: z.string().min(1, {
    message: "Vui lòng nhập địa chỉ công ty",
  }),
  namecenter: z.string().min(1, {
    message: "Vui lòng nhập tên trung tâm",
  }),
  addresscenter: z.string().min(1, {
    message: "Vui lòng nhập địa chỉ trung tâm",
  }),
  mail: z.string().email().min(1, {
    message: "Vui lòng nhập email",
  }),
  phone: z.string().min(1, {
    message: "Vui lòng nhập số điện thoại",
  }),
});

export const editContactSchema = z.object({
  id: z.string().min(1, {
    message: "Vui lòng nhập id",
  }),
  slogan: z.string().min(1, {
    message: "Vui lòng nhập slogan",
  }),

  logo: z.string().min(1, {
    message: "Vui lòng chọn logo",
  }),
  sublogo: z.string().min(1, {
    message: "Vui lòng chọn sublogo",
  }),

  namecompany: z.string().min(1, {
    message: "Vui lòng nhập tên công ty",
  }),
  addresscompany: z.string().min(1, {
    message: "Vui lòng nhập địa chỉ công ty",
  }),
  namecenter: z.string().min(1, {
    message: "Vui lòng nhập tên trung tâm",
  }),
  addresscenter: z.string().min(1, {
    message: "Vui lòng nhập địa chỉ trung tâm",
  }),
  mail: z.string().email().min(1, {
    message: "Vui lòng nhập email",
  }),
  phone: z.string().min(1, {
    message: "Vui lòng nhập số điện thoại",
  }),
});