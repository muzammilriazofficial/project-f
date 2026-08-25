"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getMe, logout, isLoggedIn } from "../lib/api";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<{ id: string; name: string; email: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLoggedIn()) {
      router.push("/login");
      return;
    }
    getMe()
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch(() => {
        logout();
        router.push("/login");
      });
  }, [router]);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-8">
      <div className="w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-zinc-500 mb-8">Welcome back, {user?.name}!</p>
        <div className="p-6 border rounded-lg mb-8">
          <p className="text-sm text-zinc-500">Name</p>
          <p className="font-medium text-lg">{user?.name}</p>
          <p className="text-sm text-zinc-500 mt-4">Email</p>
          <p className="font-medium text-lg">{user?.email}</p>
          <p className="text-sm text-zinc-500 mt-4">User ID</p>
          <p className="font-mono text-sm">{user?.id}</p>
        </div>
        <button
          onClick={handleLogout}
          className="px-6 py-3 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
