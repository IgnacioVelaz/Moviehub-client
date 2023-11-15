import { FC, ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="px-4 m-auto w-11/12 xl:w-[1170px] ">{children}</div>;
};

export default Container;
