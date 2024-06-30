import React from "react";

interface TContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: TContainerProps): JSX.Element => {
  return <div className=" h-screen w-full max-w-6xl mx-auto">{children}</div>;
};

export default Container;
