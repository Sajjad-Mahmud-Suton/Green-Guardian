import { Navbar } from './Navbar';
import { DigitalTimer } from './DigitalTimer';
import { BehaviorScore } from './BehaviorScore';
import { 
  BookOpen, 
  TrendingUp, 
  Shield, 
  AlertTriangle,
  Calendar,
  ChevronRight,
  Award,
  Target
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const marksData = [
  { month: 'Jan', marks: 75 },
  { month: 'Feb', marks: 82 },
  { month: 'Mar', marks: 78 },
  { month: 'Apr', marks: 85 },
  { month: 'May', marks: 88 },
  { month: 'Jun', marks: 92 },
];

const behaviorData = [
  { month: 'Jan', score: 85 },
  { month: 'Feb', score: 88 },
  { month: 'Mar', score: 82 },
  { month: 'Apr', score: 90 },
  { month: 'May', score: 93 },
  { month: 'Jun', score: 95 },
];

const examDistribution = [
  { name: 'Clean', value: 18, color: '#10B981' },
  { name: 'Suspicious', value: 2, color: '#F59E0B' },
];

const classRankData = [
  { subject: 'Math', myRank: 5, classAvg: 12 },
  { subject: 'Physics', myRank: 3, classAvg: 10 },
  { subject: 'Chemistry', myRank: 7, classAvg: 15 },
  { subject: 'Biology', myRank: 4, classAvg: 11 },
];

const notices = [
  {
    title: 'Final Exams Schedule Released',
    date: 'Nov 25, 2024',
    image: 'https://images.unsplash.com/photo-1613059550870-63bbef4744e3?w=400'
  },
  {
    title: 'Academic Calendar Update',
    date: 'Nov 22, 2024',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400'
  },
  {
    title: 'New AI Proctoring Features',
    date: 'Nov 20, 2024',
    image: 'https://images.unsplash.com/photo-1762438135827-428acc0e8941?w=400'
  },
];

export function Dashboard() {
  const navigate = useNavigate();
  const nextExamDate = new Date();
  nextExamDate.setDate(nextExamDate.getDate() + 3);
  nextExamDate.setHours(10, 0, 0, 0);

  const stats = [
    {
      title: 'Total Exams',
      value: '24',
      icon: BookOpen,
      trend: '+3 this month',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Average Marks',
      value: '85.3%',
      icon: TrendingUp,
      trend: '+5.2% from last',
      color: 'from-[#10B981] to-[#22C55E]'
    },
    {
      title: 'Behavior Score',
      value: '95',
      icon: Shield,
      trend: 'Excellent',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'Plagiarism Risk',
      value: 'Low',
      icon: AlertTriangle,
      trend: '8% similarity avg',
      color: 'from-amber-500 to-orange-600'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#1E293B]">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Welcome Section */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h1 className="text-3xl mb-2">Welcome back, John! 👋</h1>
          <p className="text-muted-foreground">Here's your academic performance overview</p>
        </div>

        {/* Next Exam Countdown */}
        <Card className="bg-gradient-to-br from-[#10B981] to-[#22C55E] text-white border-0 shadow-xl animate-in fade-in slide-in-from-bottom-6 duration-700">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Calendar className="w-6 h-6" />
              <CardTitle className="text-white">Next Exam: Advanced Mathematics</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <DigitalTimer targetDate={nextExamDate} size="lg" />
              <div className="mt-4 flex gap-3">
                <Button 
                  className="bg-white text-[#10B981] hover:bg-gray-100"
                  onClick={() => navigate('/exams')}
                >
                  View Details
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Set Reminder
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-3xl">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.trend}</p>
                  </div>
                  <div className={`p-3 bg-gradient-to-br ${stat.color} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Performance Analytics */}
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-10 duration-700">
          <div className="flex items-center gap-2">
            <Award className="w-6 h-6 text-[#10B981]" />
            <h2 className="text-2xl">Performance Analytics</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Marks Trend */}
            <Card>
              <CardHeader>
                <CardTitle>Marks Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={marksData}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                    <XAxis dataKey="month" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="marks" 
                      stroke="#10B981" 
                      strokeWidth={3}
                      dot={{ fill: '#10B981', r: 5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Behavior Score History */}
            <Card>
              <CardHeader>
                <CardTitle>AI Behavior Score History</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={behaviorData}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                    <XAxis dataKey="month" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="score" 
                      stroke="#22C55E" 
                      strokeWidth={3}
                      dot={{ fill: '#22C55E', r: 5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Exam Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Exam Status Distribution</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                <div className="flex items-center gap-8">
                  <ResponsiveContainer width={200} height={200}>
                    <PieChart>
                      <Pie
                        data={examDistribution}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        dataKey="value"
                      >
                        {examDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="space-y-2">
                    {examDistribution.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                        <span className="text-sm">{item.name}: {item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Class Rank Comparison */}
            <Card>
              <CardHeader>
                <CardTitle>Class Rank Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={classRankData}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                    <XAxis dataKey="subject" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="myRank" fill="#10B981" name="My Rank" />
                    <Bar dataKey="classAvg" fill="#94A3B8" name="Class Average" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Notices */}
        <div className="space-y-4 animate-in fade-in duration-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Target className="w-6 h-6 text-[#10B981]" />
              <h2 className="text-2xl">Recent Notices</h2>
            </div>
            <Button 
              variant="ghost" 
              className="text-[#10B981]"
              onClick={() => navigate('/notices')}
            >
              View All
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {notices.map((notice, index) => (
              <Card 
                key={index}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={notice.image} 
                    alt={notice.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="mb-2">{notice.title}</h3>
                  <p className="text-sm text-muted-foreground">{notice.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Current Behavior Score Widget */}
        <Card className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 border-emerald-200 dark:border-emerald-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#10B981]" />
              Current Behavior Score
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center py-8">
            <BehaviorScore score={95} size="lg" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
