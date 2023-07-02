import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const Typography = () => {
  return;
};

type HTMLHeadingAttributes = HTMLAttributes<HTMLHeadingElement>;

Typography.H1 = function H1({ className, ...props }: HTMLHeadingAttributes) {
  return (
    <h1 className={twMerge("text-3xl font-normal", className)} {...props} />
  );
};

Typography.H2 = function H2({ className, ...props }: HTMLHeadingAttributes) {
  return (
    <h2 className={twMerge("text-[26px] font-normal", className)} {...props} />
  );
};

Typography.H3 = function H3({ className, ...props }: HTMLHeadingAttributes) {
  return (
    <h3 className={twMerge("text-xl font-normal", className)} {...props} />
  );
};

Typography.H4 = function H4({ className, ...props }: HTMLHeadingAttributes) {
  return (
    <h4 className={twMerge("text-lg font-normal", className)} {...props} />
  );
};

Typography.H5 = function H5({ className, ...props }: HTMLHeadingAttributes) {
  return (
    <h5 className={twMerge("text-base font-normal", className)} {...props} />
  );
};

Typography.LGText = function LGText({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={twMerge("text-lg font-normal", className)} {...props} />
  );
};

Typography.BaseText = function BaseText({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={twMerge("text-base font-normal", className)} {...props} />
  );
};

Typography.SMText = function SMText({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={twMerge("text-sm font-normal", className)} {...props} />
  );
};

Typography.XSText = function XSText({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={twMerge("text-xs font-normal", className)} {...props} />
  );
};
