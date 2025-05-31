import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-secondary/30 to-accent/10 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-8 text-center">
        <div className="glass-card p-8 rounded-2xl">
          <h1 className="text-6xl font-bold text-primary mb-4">
            Welcome to LeisureHub
          </h1>
          <p className="text-xl text-foreground/80 mb-8">
            Your premier destination for fitness, wellness, and community
          </p>
          <Link 
            href="/dashboard"
            className="btn-accent inline-block px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl"
          >
            Get Started →
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-12">
          <div className="glass-card p-6 rounded-xl">
            <span className="text-4xl mb-4 block">🏋️‍♂️</span>
            <h3 className="text-lg font-semibold mb-2">Premium Facilities</h3>
            <p className="text-sm text-foreground/70">State-of-the-art equipment and spaces</p>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <span className="text-4xl mb-4 block">👥</span>
            <h3 className="text-lg font-semibold mb-2">Community First</h3>
            <p className="text-sm text-foreground/70">Join a vibrant, supportive community</p>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <span className="text-4xl mb-4 block">🎯</span>
            <h3 className="text-lg font-semibold mb-2">Smart Booking</h3>
            <p className="text-sm text-foreground/70">Real-time availability and instant booking</p>
          </div>
        </div>
      </div>
    </div>
  )
} 