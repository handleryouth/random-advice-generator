import { LayoutProps } from "types";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen min-w-[320px]  bg-grayish-blue flex items-center justify-center">
      {children}
    </div>
  );
};

export default Layout;
