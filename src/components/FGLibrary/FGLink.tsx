import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC, cloneElement } from "react";

type Props = {
  name: string;
  href: string;
  icon?: JSX.Element;
  className?: string;
};

const FGLink: FC<Props> = ({ href, name, className, icon }) => {
  return (
    <Link
      href={href}
      className={cn(
        className,
        "text-link-normal hover:text-link-hover transition-all",
        icon && "flex items-center gap-x-1.5"
      )}
    >
      {name}
      {icon
        ? cloneElement(icon, {
            className: "h-5 w-5",
          })
        : null}
    </Link>
  );
};

export default FGLink;
