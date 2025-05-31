import Head from 'next/head'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState, useEffect } from "react"

const branches = [
  { id: 1, name: "Downtown Branch", crowdLevel: "Moderate", currentVisitors: 45, men: 25, women: 20 },
  { id: 2, name: "Westside Branch", crowdLevel: "Low", currentVisitors: 20, men: 12, women: 8 },
  { id: 3, name: "Eastside Branch", crowdLevel: "High", currentVisitors: 80, men: 45, women: 35 },
]

const profileData = {
  name: "John Doe",
  occupation: "Software Engineer",
  role: "Premium Member",
  followers: 234,
  following: 156,
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
}

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM",
  "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM",
]

const regularVisitors = [
  { id: 1, name: "Sarah M.", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah", visits: 12 },
  { id: 2, name: "Mike R.", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike", visits: 8 },
  { id: 3, name: "Emma L.", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma", visits: 15 },
]

export default function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const getCrowdLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'low': return 'text-green-600'
      case 'moderate': return 'text-yellow-600'
      case 'high': return 'text-red-600'
      default: return 'text-gray-600'
    }
  }

  return (
    <>
      <Head>
        <title>Dashboard - LeisureHub</title>
        <meta name="description" content="Manage your leisure center bookings and profile" />
      </Head>
      <div className="space-y-6">
        <Tabs defaultValue="branches" className="w-full">
          <TabsList className="grid w-full grid-cols-2 p-1 bg-secondary/50 rounded-xl">
            <TabsTrigger value="branches" className="rounded-lg">Branch Selection</TabsTrigger>
            <TabsTrigger value="profile" className="rounded-lg">My Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="branches" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {isLoading ? (
                // Skeleton loading
                Array(3).fill(0).map((_, i) => (
                  <Card key={i} className="p-6">
                    <div className="skeleton h-6 w-3/4 mb-4" />
                    <div className="space-y-2">
                      <div className="skeleton h-4 w-1/2" />
                      <div className="skeleton h-4 w-2/3" />
                      <div className="skeleton h-4 w-1/3" />
                      <div className="skeleton h-4 w-1/2" />
                      <div className="skeleton h-10 w-full mt-4" />
                    </div>
                  </Card>
                ))
              ) : (
                branches.map((branch) => (
                  <Card key={branch.id} className="p-6 glass-card">
                    <h3 className="text-xl font-semibold mb-4 text-primary">{branch.name}</h3>
                    <div className="space-y-2">
                      <p>Crowd Level: <span className={`font-medium ${getCrowdLevelColor(branch.crowdLevel)}`}>{branch.crowdLevel}</span></p>
                      <p>Current Visitors: <span className="font-medium">{branch.currentVisitors}</span></p>
                      <p>Men: <span className="font-medium">{branch.men}</span></p>
                      <p>Women: <span className="font-medium">{branch.women}</span></p>
                      
                      <div className="mt-4">
                        <p className="text-sm font-medium mb-2">Regular Visitors:</p>
                        <div className="flex -space-x-2">
                          {regularVisitors.map((visitor) => (
                            <Avatar key={visitor.id} className="h-8 w-8 border-2 border-white">
                              <AvatarImage src={visitor.avatar} />
                              <AvatarFallback>{visitor.name[0]}</AvatarFallback>
                            </Avatar>
                          ))}
                        </div>
                      </div>

                      <Dialog>
                        <DialogTrigger asChild>
                          <button className="btn-accent w-full mt-4 py-2 rounded-xl">
                            Reserve Now
                          </button>
                        </DialogTrigger>
                        <DialogContent className="glass-card">
                          <DialogHeader>
                            <DialogTitle>Reserve a Time Slot</DialogTitle>
                            <DialogDescription>
                              Select your preferred time slot for {branch.name}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid grid-cols-3 gap-2 py-4">
                            {timeSlots.map((time) => (
                              <button
                                key={time}
                                onClick={() => setSelectedTime(time)}
                                className={`p-2 text-sm border rounded-xl transition-colors ${
                                  selectedTime === time
                                    ? 'bg-primary text-primary-foreground'
                                    : 'hover:bg-secondary'
                                }`}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                          <DialogFooter>
                            <div className="w-full space-y-4">
                              <div className="flex justify-between items-center">
                                <span>Total Price:</span>
                                <span className="font-semibold">$25.00</span>
                              </div>
                              <a
                                href="https://linktr.ee/yourlink"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-accent w-full py-2 rounded-xl text-center block"
                              >
                                Proceed to Payment
                              </a>
                            </div>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>

          <TabsContent value="profile" className="space-y-4">
            <Card className="p-6 glass-card">
              <div className="flex items-center space-x-4 mb-6">
                <Avatar className="h-20 w-20 border-4 border-white">
                  <AvatarImage src={profileData.avatar} />
                  <AvatarFallback>{profileData.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-2xl font-bold text-primary">{profileData.name}</h2>
                  <p className="text-foreground/70">{profileData.occupation}</p>
                  <p className="text-accent">{profileData.role}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-secondary/50 rounded-xl">
                  <p className="text-2xl font-bold text-primary">{profileData.followers}</p>
                  <p className="text-foreground/70">Followers</p>
                </div>
                <div className="text-center p-4 bg-secondary/50 rounded-xl">
                  <p className="text-2xl font-bold text-primary">{profileData.following}</p>
                  <p className="text-foreground/70">Following</p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
} 