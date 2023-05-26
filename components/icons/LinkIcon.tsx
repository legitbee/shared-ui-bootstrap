import { SVGProps } from "react";

export const LinkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="#000"
    {...props}
  >
    <path
      stroke="#323232"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.797 11.308a3.931 3.931 0 0 0-.8 2.373 4.002 4.002 0 0 0 4.001 4.002h4.891a4.002 4.002 0 1 0 0-8.004H9.4"
    />
    <path
      stroke="#323232"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18.203 11.607a3.93 3.93 0 0 0 .8-2.372 4.002 4.002 0 0 0-4.001-4.002H10.11a4.002 4.002 0 0 0 0 8.003h2.49"
    />
  </svg>
);
