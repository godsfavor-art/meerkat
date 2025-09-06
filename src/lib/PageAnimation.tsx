"use client";
import { useTransitionRouter } from "next-view-transitions";
import Link from "next/link";
import React from "react";

const CustomLink = ({
  url,
  children,
  setShowMenu,
  className,
}: {
  url: string;
  children: React.ReactNode;
  setShowMenu?: (e: boolean) => void;
  className?: string;
}) => {
  const router = useTransitionRouter();
  return (
    <Link
      className={className}
      href={url}
      onClick={(e) => {
        e.preventDefault();
        if (setShowMenu) setShowMenu(false);
        router.push(url, {
          onTransitionReady: pageAnimation,
        });
      }}
    >
      {children}
    </Link>
  );
};

export default CustomLink;

export const pageAnimation = () => {
  document.documentElement.animate(
    [
      {
        opacity: 1,
        scale: 1,
        transform: "translateX(0)",
      },
      {
        opacity: 0.5,
        scale: 0.9,
        transform: "translateX(-100px)",
      },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  document.documentElement.animate(
    [
      {
        transform: "translateX(-100%)",
      },
      {
        transform: "translateX(0)",
      },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
};
