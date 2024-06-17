import StudentLoadingSkeleton from "@/components/StudentLoadingSkeleton";
import StudentsList from "@/components/StudentsList";
import Link from "next/link";
import React, { Suspense } from "react";

const Dashboard = () => {
  return (
    <div className="grid gap-3">
      <h1 className="text-center font-semibold">
        Students List | <Link href={"/dashboard/add"}>Add More</Link> |{" "}
        <Link href={"/dashboard/messages"}>View Messages</Link>
      </h1>
      <div className="flex justify-center">
        <Suspense fallback={<StudentLoadingSkeleton />}>
          <StudentsList />
        </Suspense>
      </div>
    </div>
  );
};

export default Dashboard;
