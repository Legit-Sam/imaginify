import React from "react";
import { Button } from "../../../components/ui/button";
import Link from "next/link";

function EmptyState() {

    return (
        <div className="flex flex-col items-center mt-20 py-24 border-2 border-dashed border-gray-300 rounded-lg text-center p-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-700">
                You don't have any short videos created
            </h2>
           <Link href="/dashboard/create-new">
           <Button className="mt-4">
                + Create New Short Video
            </Button>
           </Link>
        </div>
    );
}

export default EmptyState;
