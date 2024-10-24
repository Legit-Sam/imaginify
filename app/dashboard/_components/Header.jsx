import React from "react";
import Image from "next/image";
import { Button } from "../../../components/ui/button";
import { UserButton } from "@clerk/nextjs";

function Header  () {
  return(
   <div className="p-3 border-b border-border flex justify-between items-center shadow-md">
     <div className="flex items-center gap-2">
      <Image src="/logo.svg" alt="logo" width={30} height={30} />
      <h2 className="text-xl font-bold">Ai Short Vid</h2>
    </div>
    <div className="flex items-center gap-3">  
        <Button>Dashboard</Button>
        <UserButton/>
    </div>
   </div>
  );
};

export default Header;
