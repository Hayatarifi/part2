import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import {Outlet} from 'react-router-dom'
export default function Root() {
  return (
    <>
      <Navbar />

      <Outlet />

      <Footer />
    </>
  );
}
