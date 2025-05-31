import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Head from 'next/head';

const branches = [
  { 
    id: 1, 
    name: 'Downtown Branch', 
    crowdLevel: 'Medium', 
    currentVisitors: 45, 
    men: 25, 
    women: 20, 
    regularVisitors: 120,
    image: '🏢'
  },
  { 
    id: 2, 
    name: 'Westside Branch', 
    crowdLevel: 'Low', 
    currentVisitors: 20, 
    men: 12, 
    women: 8, 
    regularVisitors: 85,
    image: '🌅'
  },
  { 
    id: 3, 
    name: 'Eastside Branch', 
    crowdLevel: 'High', 
    currentVisitors: 75, 
    men: 40, 
    women: 35, 
    regularVisitors: 200,
    image: '🌇'
  },
];

const profileData = {
  name: 'John Doe',
  occupation: 'Software Engineer',
  role: 'Premium Member',
  followers: 234,
  subscribers: 156,
  avatar: '/avatar-placeholder.svg',
  bio: 'Passionate about fitness and community building. Regular at Loop since 2023.',
  achievements: ['Early Bird Member', 'Community Leader', 'Fitness Enthusiast']
};

export default function Dashboard() {
  const [selectedBranch, setSelectedBranch] = useState(branches[0]);

  const handleReserve = () => {
    window.open('https://linktr.ee/loop', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/20 to-accent/5 p-8">
      <Head>
        <title>Dashboard - Loop</title>
        <meta name="description" content="Loop Dashboard" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <Tabs defaultValue="branch" className="max-w-4xl mx-auto">
        <TabsList className="glass-card grid w-full grid-cols-2 p-1 rounded-2xl mb-8">
          <TabsTrigger value="branch" className="rounded-xl">Branch Selection</TabsTrigger>
          <TabsTrigger value="profile" className="rounded-xl">My Profile</TabsTrigger>
        </TabsList>

        <TabsContent value="branch" className="space-y-6">
          <div className="grid gap-6">
            {branches.map((branch) => (
              <Card
                key={branch.id}
                className={`glass-card p-8 cursor-pointer transition-all hover:scale-[1.02] ${
                  selectedBranch.id === branch.id ? 'ring-2 ring-accent' : ''
                }`}
                onClick={() => setSelectedBranch(branch)}
              >
                <div className="flex items-center gap-6">
                  <span className="text-4xl">{branch.image}</span>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4">{branch.name}</h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <p className="text-foreground/60">Crowd Level</p>
                        <p className="text-xl font-semibold">{branch.crowdLevel}</p>
                      </div>
                      <div>
                        <p className="text-foreground/60">Current Visitors</p>
                        <p className="text-xl font-semibold">{branch.currentVisitors}</p>
                      </div>
                      <div>
                        <p className="text-foreground/60">Men</p>
                        <p className="text-xl font-semibold">{branch.men}</p>
                      </div>
                      <div>
                        <p className="text-foreground/60">Women</p>
                        <p className="text-xl font-semibold">{branch.women}</p>
                      </div>
                      <div>
                        <p className="text-foreground/60">Regular Visitors</p>
                        <p className="text-xl font-semibold">{branch.regularVisitors}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button
              onClick={handleReserve}
              className="btn-accent px-12 py-6 text-lg rounded-full shadow-lg hover:shadow-xl"
            >
              Reserve Now →
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="profile">
          <Card className="glass-card p-8">
            <div className="flex items-start gap-8 mb-8">
              <Avatar className="h-24 w-24">
                <AvatarImage src={profileData.avatar} alt={profileData.name} />
                <AvatarFallback className="text-2xl">{profileData.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-3xl font-bold mb-2">{profileData.name}</h2>
                <p className="text-foreground/60 text-lg mb-1">{profileData.occupation}</p>
                <p className="text-accent font-semibold">{profileData.role}</p>
                <p className="mt-4 text-foreground/80">{profileData.bio}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="glass-card p-6 rounded-xl">
                <p className="text-foreground/60 mb-2">Followers</p>
                <p className="text-3xl font-semibold">{profileData.followers}</p>
              </div>
              <div className="glass-card p-6 rounded-xl">
                <p className="text-foreground/60 mb-2">Subscribers</p>
                <p className="text-3xl font-semibold">{profileData.subscribers}</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Achievements</h3>
              <div className="flex gap-3">
                {profileData.achievements.map((achievement, index) => (
                  <span
                    key={index}
                    className="glass-card px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {achievement}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 