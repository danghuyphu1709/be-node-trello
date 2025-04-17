import { Types } from "mongoose";

export const mapOrder = (originalArray, orderArray, key) => {
  if (!originalArray || !orderArray || !key) return [];

  const clonedArray = [...originalArray];
  const orderedArray = clonedArray.sort((a, b) => {
    return orderArray.indexOf(a[key]) - orderArray.indexOf(b[key]);
  });

  return orderedArray;
};

export const slugify = (title) => {
  return title
    .toString() // đảm bảo là string
    .normalize("NFD") // chuẩn hoá unicode
    .replace(/[\u0300-\u036f]/g, "") // loại bỏ dấu tiếng Việt
    .toLowerCase() // chuyển thành chữ thường
    .trim() // bỏ khoảng trắng đầu/cuối
    .replace(/[^a-z0-9\s-]/g, "") // loại bỏ ký tự đặc biệt
    .replace(/\s+/g, "-") // thay khoảng trắng bằng -
    .replace(/-+/g, "-"); // loại bỏ dấu - lặp lại
}
