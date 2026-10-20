import { Outlet } from "react-router-dom";
import NavBar from "../organisms/NavBar";
import Footer from "../organisms/Footer";

export default function MainLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}