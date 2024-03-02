import { redirect } from "next/navigation";
import DashboardNav from "../components/DashboardNav";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "../lib/db";

async function getData(id, email, firstName, lastName, profileImage) {
  const user = await prisma.user.findUnique()
   
}

const DashboardLayout = async ({ children }) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/");
  }

  return (
    <div className="flex flex-col space-x-6 mt-10">
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex">
          <DashboardNav />
        </aside>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
