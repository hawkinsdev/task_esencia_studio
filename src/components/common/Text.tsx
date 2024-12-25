import React from "react";

export const Text: React.FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >
> = ({ children, ...props }) => {
  return <span {...props}>{children}</span>;
};
