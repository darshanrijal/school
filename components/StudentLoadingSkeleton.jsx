import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
const StudentLoadingSkeleton = () => {
  return (
    <div className="grid gap-2 overflow-hidden">
      <Skeleton className={"h-24 md:w-96 w-72"} />
      <Skeleton className={"h-24 md:w-96 w-72"} />
      <Skeleton className={"h-24 md:w-96 w-72"} />
      <Skeleton className={"h-24 md:w-96 w-72"} />
      <Skeleton className={"h-24 md:w-96 w-72"} />
    </div>
  );
};

export default StudentLoadingSkeleton;
