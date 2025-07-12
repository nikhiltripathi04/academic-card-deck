import { FileText, CreditCard, BookOpen, TrendingUp, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import StatsCard from "@/components/StatsCard";
import SubjectCard from "@/components/SubjectCard";
import RecentActivity from "@/components/RecentActivity";
import QuickActions from "@/components/QuickActions";

const mockSubjects = [
  {
    id: '1',
    name: 'Data Structures',
    description: 'Trees, graphs, arrays, and advanced data structures',
    noteCount: 24,
    flashcardCount: 156,
    color: '#8B5CF6',
    lastStudied: '2 hours ago'
  },
  {
    id: '2',
    name: 'Algorithms',
    description: 'Sorting, searching, and optimization algorithms',
    noteCount: 18,
    flashcardCount: 89,
    color: '#06B6D4',
    lastStudied: '1 day ago'
  },
  {
    id: '3',
    name: 'Database Systems',
    description: 'SQL, NoSQL, and database design principles',
    noteCount: 12,
    flashcardCount: 67,
    color: '#10B981',
    lastStudied: '3 days ago'
  },
  {
    id: '4',
    name: 'Web Development',
    description: 'React, Node.js, and full-stack development',
    noteCount: 31,
    flashcardCount: 143,
    color: '#F59E0B',
    lastStudied: '5 hours ago'
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back to CS Notes
          </h1>
          <p className="text-muted-foreground">
            Continue your learning journey with personalized study materials
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Notes"
            value={85}
            description="Across all subjects"
            icon={FileText}
            trend={{ value: 12, isPositive: true }}
          />
          <StatsCard
            title="Flashcards"
            value={455}
            description="Ready for study"
            icon={CreditCard}
            trend={{ value: 8, isPositive: true }}
          />
          <StatsCard
            title="Subjects"
            value={4}
            description="Active learning paths"
            icon={BookOpen}
          />
          <StatsCard
            title="Study Streak"
            value="7 days"
            description="Keep it up!"
            icon={TrendingUp}
            trend={{ value: 2, isPositive: true }}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Subjects */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Your Subjects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mockSubjects.map((subject) => (
                  <SubjectCard key={subject.id} subject={subject} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Activity & Actions */}
          <div className="space-y-6">
            <QuickActions />
            <RecentActivity />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
