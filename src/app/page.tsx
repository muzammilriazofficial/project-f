import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">My App</h1>
      <div className="flex gap-4">
        <Link
          href="/register"
          className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Register
        </Link>
        <Link
          href="/login"
          className="px-6 py-3 border border-black dark:border-white rounded-lg font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
