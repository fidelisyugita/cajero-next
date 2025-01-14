import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-lg font-bold">Cajero</h1>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/dashboard">Dashboard</Link>
        </div>
      </div>
    </nav>
  );
}
