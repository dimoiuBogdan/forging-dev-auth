import { FC, PropsWithChildren } from "react";
import CenteredLayout from "../(layouts)/CenteredLayout";

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return <CenteredLayout>{children}</CenteredLayout>;
};

export default AuthLayout;
