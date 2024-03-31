import { Suspense } from "react";
import { Navbar } from "./dashboard/_components/navbar";
import { Sidebar } from "./dashboard/_components/sidebar";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50">
        {/* <Suspense fallback={<div>...Loading</div>}>
        </Suspense> */}
        <Navbar count={1} />
      </div>
      <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        {/* <Suspense fallback={<div>...Loading</div>}>
        </Suspense> */}
        <Sidebar />
      </div>
      <main className="md:pl-56 pt-[100px] h-full">{children}</main>
    </div>
  );
};

export default DashboardLayout;
