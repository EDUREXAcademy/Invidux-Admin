"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./Sidebar";
import useStore from "@/store";

type Props = {};

const MobileSidebar = (props: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  const { openMobileSidebar, setOpenMobileSidebar } = useStore();

  // const [openMobileSidebar, setOpenMobileSidebar] = useState(true)

  // console.log({ openMobileSidebar })
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const userData = {};

  return (
    <div className="lg:hidden">
      <Sheet open={openMobileSidebar} onOpenChange={setOpenMobileSidebar}>
        <SheetTrigger onClick={() => setOpenMobileSidebar(true)}>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setOpenMobileSidebar(true)}
          >
            <Menu size={30} onClick={() => setOpenMobileSidebar(true)} />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="p-0">
          <Sidebar userData={userData} />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSidebar;
