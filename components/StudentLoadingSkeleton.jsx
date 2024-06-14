import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
const StudentLoadingSkeleton = () => {
  return (
    <div className="grid gap-2 overflow-hidden">
      <Skeleton className={"h-24 w-96"} />
      <Skeleton className={"h-24 w-96"} />
      <Skeleton className={"h-24 w-96"} />
      <Skeleton className={"h-24 w-96"} />
      <Skeleton className={"h-24 w-96"} />
    </div>
  );
};

export default StudentLoadingSkeleton;
