"use client";
import React, { useEffect } from "react";
import { nav } from "@/data/data";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NavBar: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Only trigger if not typing in an input field
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      switch (event.key.toLowerCase()) {
        case "h":
          router.push("/");
          break;
        case "p":
          router.push("/projects");
          break;
        case "b":
          router.push("/blogs");
          break;
        case "d":
          router.push("/docs");
          break;
        default:
          break;
      }
    };

    // Add event listener
    window.addEventListener("keydown", handleKeyPress);

    // Cleanup
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [router]);

  return (
    <nav className="nav-bar">
      {nav.map((item, index) => (
        <Link href={item.url} key={index} className="nav-bar-item">
          {item.symbol + " " + item.title}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
