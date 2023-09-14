"use client";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import HomePage from "./pages/home/page";

export default function Home() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <div className="container-fluid">
        <HomePage />
      </div>
      ;
    </>
  );
}
