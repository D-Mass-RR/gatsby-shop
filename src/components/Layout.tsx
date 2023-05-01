import React from "react";
import { Header } from "@/components/Header";

type Props = {
  children: React.ReactNode;
};
const Layout = (props: Props) => {
  return (
    <>
      <Header />
      <div className="py-20 flex flex-wrap justify-center mt-10">
        {props.children}
      </div>
    </>
  );
};

export { Layout };
