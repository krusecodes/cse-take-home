import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Link href="/one">Question One</Link>
        <Link href="/two">Question Two</Link>
        <Link href="/three">Question Three</Link>
        <Link href="/four">Question Four</Link>
        <Link href="/five">Question Five</Link>
        <Link href="/six">Question Six</Link>
        <Link href="/seven">Question Seven</Link>
      </div>
    </main>
  );
}

