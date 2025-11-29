import { TeacherSidebar } from './TeacherSidebar';
import { 
  Users, 
  BookOpen, 
  Monitor, 
  TrendingUp,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Clock,
  PlusCircle,
  ClipboardCheck,
  BarChart3
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
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

const examStats = [
  { month: 'Jan', completed: 12, ongoing: 2 },
  { month: 'Feb', completed: 15, ongoing: 1 },
  { month: 'Mar', completed: 10, ongoing: 3 },
  { month: 'Apr', completed: 18, ongoing: 2 },
  { month: 'May', completed: 14, ongoing: 1 },
  { month: 'Jun', completed: 16, ongoing: 4 },
];

const studentPerformance = [
  { range: '90-100', count: 45 },
  { range: '80-89', count: 68 },
  { range: '70-79', count: 52 },
  { range: '60-69', count: 28 },
  { range: '<60', count: 12 },
];

const behaviorDistribution = [
  { name: 'Excellent', value: 68, color: '#22C55E' },
  { name: 'Good', value: 25, color: '#FBBF24' },
  { name: 'Fair', value: 5, color: '#F59E0B' },
  { name: 'Poor', value: 2, color: '#EF4444' },
];

const recentExams = [
  {
    id: 1,
    title: 'Data Structures Final',
    date: 'Nov 28, 2024',
    status: 'live',
    students: 42,
    completed: 28
  },
  {
    id: 2,
    title: 'Algorithms Midterm',
    date: 'Nov 25, 2024',
    status: 'completed',
    students: 38,
    completed: 38
  },
  {
    id: 3,
    title: 'Database Systems Quiz',
    date: 'Nov 30, 2024',
    status: 'scheduled',
    students: 45,
    completed: 0
  },
];

export function TeacherDashboard() {
  const navigate = useNavigate();

  const stats = [
    {
      title: 'Total Students',
      value: '205',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      change: '+12 this month'
    },
    {
      title: 'Active Exams',
      value: '4',
      icon: Monitor,
      color: 'from-[#22C55E] to-[#10B981]',
      change: '2 live now'
    },
    {
      title: 'Exams This Month',
      value: '16',
      icon: BookOpen,
      color: 'from-purple-500 to-purple-600',
      change: '+4 from last month'
    },
    {
      title: 'Avg Performance',
      value: '82.5%',
      icon: TrendingUp,
      color: 'from-orange-500 to-orange-600',
      change: '+3.2% improvement'
    },
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'live':
        return 'bg-red-100 text-red-700 dark:bg-red-950/30 dark:text-red-400';
      case 'completed':
        return 'bg-green-100 text-green-700 dark:bg-green-950/30 dark:text-green-400';
      case 'scheduled':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-950/30 dark:text-gray-400';
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-[#0F172A]">
      <TeacherSidebar activePage="/teacher/dashboard" />
      
      <div className="flex-1 ml-64">
        <div className="p-8 space-y-8">
          {/* Header */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="text-3xl mb-2">Teacher Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, Dr. Sarah Evans</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-6 duration-700">
            {stats.map((stat, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">{stat.title}</p>
                      <p className="text-3xl">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.change}</p>
                    </div>
                    <div className={`p-3 bg-gradient-to-br ${stat.color} rounded-xl shadow-lg`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Actions */}
          <Card className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Button 
                  className="h-24 flex flex-col gap-2 bg-[#22C55E] hover:bg-[#16A34A] text-white"
                  onClick={() => navigate('/teacher/create-exam')}
                >
                  <PlusCircle className="w-8 h-8" />
                  <span>Create New Exam</span>
                </Button>
                <Button 
                  variant="outline"
                  className="h-24 flex flex-col gap-2"
                  onClick={() => navigate('/teacher/monitoring')}
                >
                  <Monitor className="w-8 h-8" />
                  <span>Live Monitoring</span>
                </Button>
                <Button 
                  variant="outline"
                  className="h-24 flex flex-col gap-2"
                  onClick={() => navigate('/teacher/marking')}
                >
                  <ClipboardCheck className="w-8 h-8" />
                  <span>Review Submissions</span>
                </Button>
                <Button 
                  variant="outline"
                  className="h-24 flex flex-col gap-2"
                  onClick={() => navigate('/teacher/reports')}
                >
                  <BarChart3 className="w-8 h-8" />
                  <span>View Reports</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Exams */}
          <Card className="animate-in fade-in duration-700">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Recent Exams</CardTitle>
                <Button variant="ghost" className="text-[#22C55E]">
                  View All
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentExams.map((exam) => (
                <div 
                  key={exam.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4>{exam.title}</h4>
                      <Badge className={getStatusColor(exam.status)}>
                        {exam.status === 'live' && <Monitor className="w-3 h-3 mr-1" />}
                        {exam.status === 'completed' && <CheckCircle className="w-3 h-3 mr-1" />}
                        {exam.status === 'scheduled' && <Clock className="w-3 h-3 mr-1" />}
                        {exam.status.charAt(0).toUpperCase() + exam.status.slice(1)}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exam.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {exam.completed}/{exam.students} completed
                      </div>
                    </div>
                  </div>

                  <Button 
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      if (exam.status === 'live') {
                        navigate('/teacher/monitoring');
                      } else if (exam.status === 'completed') {
                        navigate('/teacher/marking');
                      }
                    }}
                  >
                    {exam.status === 'live' ? 'Monitor' : exam.status === 'completed' ? 'View Results' : 'Edit'}
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-in fade-in duration-700">
            {/* Exam Statistics */}
            <Card>
              <CardHeader>
                <CardTitle>Exam Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={examStats}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="completed" fill="#22C55E" name="Completed" />
                    <Bar dataKey="ongoing" fill="#3B82F6" name="Ongoing" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Student Performance Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Performance Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={studentPerformance}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                    <XAxis dataKey="range" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="#22C55E" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Behavior Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Student Behavior Analysis</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                <div className="flex items-center gap-8">
                  <ResponsiveContainer width={200} height={200}>
                    <PieChart>
                      <Pie
                        data={behaviorDistribution}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        dataKey="value"
                      >
                        {behaviorDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="space-y-2">
                    {behaviorDistribution.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                        <div>
                          <p className="text-sm">{item.name}</p>
                          <p className="text-xs text-muted-foreground">{item.value}%</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Alerts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                  Alerts & Notifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-red-700 dark:text-red-400">High plagiarism detected</p>
                      <p className="text-xs text-red-600 dark:text-red-500 mt-1">2 submissions require review</p>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-amber-700 dark:text-amber-400">Suspicious activity detected</p>
                      <p className="text-xs text-amber-600 dark:text-amber-500 mt-1">5 students flagged in live exam</p>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-blue-700 dark:text-blue-400">Marking queue</p>
                      <p className="text-xs text-blue-600 dark:text-blue-500 mt-1">12 exams ready for review</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
