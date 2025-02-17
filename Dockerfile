# استفاده از تصویر رسمی Node.js
FROM node:18-alpine

# تنظیم دایرکتوری کار
WORKDIR /app

# کپی کردن فایل‌های پروژه
COPY package.json yarn.lock ./

# نصب وابستگی‌ها
RUN pnpm install

# کپی کردن بقیه فایل‌های پروژه
COPY . .

# ساخت پروژه
RUN pnpm build

# پورت مورد استفاده
EXPOSE 3000

# دستور اجرای پروژه
CMD ["pnpm", "start"]