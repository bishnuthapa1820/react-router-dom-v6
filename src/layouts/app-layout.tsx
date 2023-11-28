import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";

// We use outlet to display router component like home page, about page, etc

export default function AppLayout() {
  return (
    <>
      <Header />
      <div className="your class-name for main section">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
