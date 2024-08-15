import AllProducts from "@/components/AllProducts/AllProducts";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <>

      <AllProducts />
      {/* <ToastContainer position="bottom-center" autoClose={"2000"} /> */}
    </>
  );
}
