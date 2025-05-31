'use client';

import { useState, useEffect } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { Users, User, Clock, Calendar, TrendingUp } from 'lucide-react';

// Generate random stats within a reasonable range
const generateRandomStats = (base: number) => {
  const variation = Math.floor(base * 0.1); // 10% variation
  return base + Math.floor(Math.random() * variation * 2) - variation;
};

const branches = [
  { id: 1, name: 'Downtown Branch', crowdLevel: 'Moderate', currentVisitors: 45, men: 25, women: 20, regularVisitors: 120 },
  { id: 2, name: 'Westside Branch', crowdLevel: 'Low', currentVisitors: 20, men: 12, women: 8, regularVisitors: 85 },
  { id: 3, name: 'Eastside Branch', crowdLevel: 'High', currentVisitors: 75, men: 40, women: 35, regularVisitors: 150 },
];

const regularVisitors = [
  { id: 1, name: 'Sarah Chen', visits: 45, lastVisit: '2 days ago', avatar: 'SC' },
  { id: 2, name: 'Mike Rodriguez', visits: 38, lastVisit: '1 day ago', avatar: 'MR' },
  { id: 3, name: 'Emma Wilson', visits: 52, lastVisit: '3 days ago', avatar: 'EW' },
  { id: 4, name: 'James Kim', visits: 29, lastVisit: '5 days ago', avatar: 'JK' },
];

const profileData = {
  name: 'Alex Johnson',
  occupation: 'Software Engineer',
  role: 'Premium Member',
  followers: 234,
  subscribers: 156,
  bio: 'Fitness enthusiast and tech professional. Regular visitor at Loop Leisure Center.',
};

export default function Dashboard() {
  const [selectedBranch, setSelectedBranch] = useState(branches[0]);
  const [stats, setStats] = useState(selectedBranch);

  // Update stats every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setStats({
        ...selectedBranch,
        currentVisitors: generateRandomStats(selectedBranch.currentVisitors),
        men: generateRandomStats(selectedBranch.men),
        women: generateRandomStats(selectedBranch.women),
      });
    }, 30000);

    return () => clearInterval(interval);
  }, [selectedBranch]);

  return (
    <div className="min-h-screen bg-[#EDE9FE]/30">
      <div className="container mx-auto px-4 py-8">
        <Tabs.Root defaultValue="branch" className="w-full">
          <Tabs.List className="flex border-b border-[#4C1D95]/10 mb-8">
            <Tabs.Trigger
              value="branch"
              className="px-4 py-2 text-lg font-medium text-[#1E1E1E] hover:text-[#4C1D95] data-[state=active]:text-[#4C1D95] data-[state=active]:border-b-2 data-[state=active]:border-[#4C1D95]"
            >
              Branch Selection
            </Tabs.Trigger>
            <Tabs.Trigger
              value="profile"
              className="px-4 py-2 text-lg font-medium text-[#1E1E1E] hover:text-[#4C1D95] data-[state=active]:text-[#4C1D95] data-[state=active]:border-b-2 data-[state=active]:border-[#4C1D95]"
            >
              My Profile
            </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="branch" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {branches.map((branch) => (
                <div
                  key={branch.id}
                  className={`glass-card p-6 rounded-2xl ${
                    selectedBranch.id === branch.id
                      ? 'border-[#4C1D95] bg-[#EDE9FE]/50'
                      : 'border-gray-200'
                  } cursor-pointer hover:border-[#4C1D95]/50 transition-all`}
                  onClick={() => setSelectedBranch(branch)}
                >
                  <h3 className="text-xl font-semibold mb-4">{branch.name}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-[#4C1D95]" />
                      <span>Crowd Level: {branch.crowdLevel}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-5 h-5 text-[#4C1D95]" />
                      <span>Current Visitors: {stats.currentVisitors}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-[#4C1D95]" />
                      <span>Regular Visitors: {branch.regularVisitors}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {selectedBranch && (
              <div className="mt-8 glass-card p-6 rounded-2xl">
                <h2 className="text-2xl font-bold mb-6">{selectedBranch.name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-[#EDE9FE]/30 rounded-xl">
                      <h3 className="font-semibold mb-2">Gender Distribution</h3>
                      <div className="flex gap-4">
                        <div>
                          <span className="text-[#4C1D95]">Men: {stats.men}</span>
                        </div>
                        <div>
                          <span className="text-[#4C1D95]">Women: {stats.women}</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-[#EDE9FE]/30 rounded-xl">
                      <h3 className="font-semibold mb-2">Regular Visitors</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {regularVisitors.map((visitor) => (
                          <div
                            key={visitor.id}
                            className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/50 cursor-pointer transition-colors"
                          >
                            <div className="w-8 h-8 bg-[#4C1D95]/10 rounded-full flex items-center justify-center text-sm font-medium text-[#4C1D95]">
                              {visitor.avatar}
                            </div>
                            <div>
                              <p className="text-sm font-medium">{visitor.name}</p>
                              <p className="text-xs text-gray-500">{visitor.lastVisit}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <button
                      onClick={() => window.location.href = 'https://linktr.ee'}
                      className="btn-accent px-6 py-3 rounded-xl font-semibold"
                    >
                      Reserve Now
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Tabs.Content>

          <Tabs.Content value="profile" className="mt-6">
            <div className="max-w-2xl mx-auto">
              <div className="glass-card rounded-2xl p-8">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-24 h-24 bg-[#4C1D95]/10 rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-[#4C1D95]">
                      {profileData.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{profileData.name}</h2>
                    <p className="text-[#1E1E1E]/80">{profileData.occupation}</p>
                    <p className="text-[#4C1D95] font-medium">{profileData.role}</p>
                  </div>
                </div>

                <div className="border-t border-[#4C1D95]/10 pt-6">
                  <p className="text-[#1E1E1E]/80 mb-6">{profileData.bio}</p>
                  <div className="flex gap-6">
                    <div>
                      <span className="text-2xl font-bold">{profileData.followers}</span>
                      <p className="text-[#1E1E1E]/60">Followers</p>
                    </div>
                    <div>
                      <span className="text-2xl font-bold">{profileData.subscribers}</span>
                      <p className="text-[#1E1E1E]/60">Subscribers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  );
} 