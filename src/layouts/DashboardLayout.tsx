import { Outlet } from "react-router-dom";
import Topbar from "../components/dashboard/Topbar";

export default function DashboardLayout() {
  return (

     <div className="min-h-screen bg-stone-100 text-zinc-900">

      <Topbar />

      <main className="pt-20">
        <Outlet />
      </main>

    </div> 
  );
}