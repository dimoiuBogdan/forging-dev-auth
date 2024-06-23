import { FC, PropsWithChildren } from "react";

const CenteredLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex h-screen items-center justify-center">{children}</div>
  );
};

export default CenteredLayout;
