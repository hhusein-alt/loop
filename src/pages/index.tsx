import { useRouter } from 'next/router'
import { Button } from '@/components/ui/button'
import Head from 'next/head'

export default function LandingPage() {
  const router = useRouter()

  const handleLogin = () => {
    router.push('/dashboard')
  }

  return (
    <>
      <Head>
        <title>Loop - Your Premier Leisure Center</title>
        <meta name="description" content="Your premier destination for fitness, wellness, and community" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/20 to-accent/5 flex flex-col items-center justify-center p-4">
        <div className="max-w-4xl w-full space-y-8 text-center">
          <div className="glass-card p-12 rounded-3xl">
            <h1 className="text-6xl font-bold text-primary mb-6">
              Welcome to Loop
            </h1>
            <p className="text-xl text-foreground/80 mb-10">
              Your premier destination for fitness, wellness, and community
            </p>
            <Button
              onClick={handleLogin}
              className="btn-accent px-10 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started →
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-6 mt-12">
            <div className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
              <span className="text-4xl mb-4 block">🏋️‍♂️</span>
              <h3 className="text-xl font-semibold mb-3">Premium Facilities</h3>
              <p className="text-foreground/70">State-of-the-art equipment and spaces</p>
            </div>
            <div className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
              <span className="text-4xl mb-4 block">👥</span>
              <h3 className="text-xl font-semibold mb-3">Community First</h3>
              <p className="text-foreground/70">Join a vibrant, supportive community</p>
            </div>
            <div className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
              <span className="text-4xl mb-4 block">🎯</span>
              <h3 className="text-xl font-semibold mb-3">Smart Booking</h3>
              <p className="text-foreground/70">Real-time availability and instant booking</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 