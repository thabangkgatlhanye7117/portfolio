import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Projects from "../pages/Projects";
import Experience from "../pages/Experience";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

import DashboardLayout from "../layouts/DashboardLayout";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
            {/* Landing */}
            <Route path="/" element={<Home />} />

            {/* Workspace */}
            <Route element={<DashboardLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contact" element={<Contact />} />
            </Route>

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}