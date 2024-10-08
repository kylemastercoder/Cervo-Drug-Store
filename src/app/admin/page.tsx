import { redirect } from "next/navigation";

const AdminIndex = () => {
  return redirect("/admin/auth/sign-in");
};

export default AdminIndex;
