import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#EDE9FE] to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-[#1E1E1E] mb-6">
            Welcome to <span className="text-[#4C1D95]">Loop</span>
          </h1>
          <p className="text-xl text-[#1E1E1E]/80 mb-12 max-w-2xl mx-auto">
            Your premium leisure experience starts here. We know what we do. You're part of it.
          </p>
          <Link
            href="/dashboard"
            className="btn-accent inline-block px-8 py-4 rounded-2xl text-lg font-semibold"
          >
            Get Started →
          </Link>
        </div>
      </div>
    </main>
  );
} 