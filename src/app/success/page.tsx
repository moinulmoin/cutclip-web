"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

export default function SuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Success />
    </Suspense>
  );
}

function Success() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const checkout_id = searchParams.get("checkout_id");

  useEffect(() => {
    if (!checkout_id) {
      router.push("/");
    };

  }, [checkout_id]);

  useEffect(() => {
    if (!checkout_id) return;
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [checkout_id]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-green-600 mb-4">Your purchase was successful!</h1>
        <p className="text-gray-600">Redirecting to homepage in 5 seconds...</p>
      </div>
    </div>
  );
}
