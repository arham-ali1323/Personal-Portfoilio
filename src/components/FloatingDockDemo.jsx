import React from "react";
import { FloatingDock } from "./ui/FloatingDock";
import { FaGithub, FaEnvelope, FaPhone, FaHome, FaUser, FaBriefcase, FaProjectDiagram, FaGraduationCap, FaLanguage, FaAddressBook, FaFolderOpen, FaHistory } from "react-icons/fa";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <FaHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#home",
    },
    {
      title: "About",
      icon: (
        <FaUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#about",
    },
    {
      title: "Skills",
      icon: (
        <FaBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#skills",
    },
    {
      title: "Experience",
      icon: (
        <FaHistory className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#experience",
    },
    {
      title: "Projects",
      icon: (
        <FaFolderOpen className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "Education",
      icon: (
        <FaGraduationCap className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#education",
    },
    {
      title: "Languages",
      icon: (
        <FaLanguage className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#languages",
    },
    {
      title: "Contact",
      icon: (
        <FaAddressBook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact",
    },
    {
      title: "GitHub",
      icon: (
        <FaGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/arham-ali1323",
      target: "_blank"
    },
    {
      title: "Email",
      icon: (
        <FaEnvelope className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:arhamali.dev@gmail.com",
    },
  ];
  
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <FloatingDock
        mobileClassName="translate-y-20"
        items={links}
      />
    </div>
  );
}
