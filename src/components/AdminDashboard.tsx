import { Navbar } from './Navbar';
import { useState } from 'react';
import { 
  Users, 
  AlertTriangle, 
  CheckCircle, 
  TrendingUp,
  Eye,
  FileCheck,
  UserCheck,
  UserX,
  Search,
  Filter
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

const students = [
  {
    id: 1,
    name: 'John Smith',
    studentId: 'STU2024',
    examId: 'EX001',
    examTitle: 'Data Structures',
    status: 'in-progress',
    behaviorScore: 95,
    tabSwitches: 0,
    suspiciousActivity: 'None',
    avatar: 'https://images.unsplash.com/photo-1600178572204-6ac8886aae63?w=100'
  },
  {
    id: 2,
    name: 'Emma Johnson',
    studentId: 'STU2025',
    examId: 'EX001',
    examTitle: 'Data Structures',
    status: 'in-progress',
    behaviorScore: 72,
    tabSwitches: 3,
    suspiciousActivity: 'Multiple tab switches',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100'
  },
  {
    id: 3,
    name: 'Michael Brown',
    studentId: 'STU2026',
    examId: 'EX001',
    examTitle: 'Data Structures',
    status: 'completed',
    behaviorScore: 88,
    tabSwitches: 1,
    suspiciousActivity: 'Minor',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100'
  },
  {
    id: 4,
    name: 'Sarah Davis',
    studentId: 'STU2027',
    examId: 'EX001',
    examTitle: 'Data Structures',
    status: 'in-progress',
    behaviorScore: 45,
    tabSwitches: 8,
    suspiciousActivity: 'High risk - Face not detected',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100'
  },
  {
    id: 5,
    name: 'David Wilson',
    studentId: 'STU2028',
    examId: 'EX001',
    examTitle: 'Data Structures',
    status: 'completed',
    behaviorScore: 92,
    tabSwitches: 0,
    suspiciousActivity: 'None',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100'
  },
];

const autoMarkingQueue = [
  {
    id: 1,
    studentName: 'Michael Brown',
    studentId: 'STU2026',
    examTitle: 'Data Structures',
    aiScore: 88,
    submittedAt: '2 hours ago',
    status: 'pending'
  },
  {
    id: 2,
    studentName: 'David Wilson',
    studentId: 'STU2028',
    examTitle: 'Data Structures',
    aiScore: 92,
    submittedAt: '1 hour ago',
    status: 'pending'
  },
];

export function AdminDashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const stats = [
    {
      title: 'Active Students',
      value: '42',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      change: '+12% today'
    },
    {
      title: 'Suspicious Activity',
      value: '3',
      icon: AlertTriangle,
      color: 'from-red-500 to-red-600',
      change: 'Requires attention'
    },
    {
      title: 'Completed Today',
      value: '28',
      icon: CheckCircle,
      color: 'from-[#10B981] to-[#22C55E]',
      change: '+8 from yesterday'
    },
    {
      title: 'Avg Behavior',
      value: '87.5',
      icon: TrendingUp,
      color: 'from-purple-500 to-purple-600',
      change: '+2.3 points'
    },
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'in-progress':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400';
      case 'completed':
        return 'bg-green-100 text-green-700 dark:bg-green-950/30 dark:text-green-400';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-950/30 dark:text-gray-400';
    }
  };

  const getBehaviorColor = (score: number) => {
    if (score >= 80) return 'text-green-600 dark:text-green-400';
    if (score >= 60) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         student.studentId.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || student.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#1E293B]">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Header */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h1 className="text-3xl mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Monitor ongoing exams and review submissions</p>
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

        {/* Live Monitoring */}
        <Card className="animate-in fade-in slide-in-from-bottom-8 duration-700">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-[#10B981]" />
                Live Exam Monitoring
              </CardTitle>
              <div className="flex gap-2">
                <div className="relative flex-1 min-w-[200px]">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search students..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9 h-9"
                  />
                </div>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-[140px] h-9">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student</TableHead>
                    <TableHead>Student ID</TableHead>
                    <TableHead>Exam</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Behavior</TableHead>
                    <TableHead>Tab Switches</TableHead>
                    <TableHead>Activity</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredStudents.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={student.avatar} />
                            <AvatarFallback>{student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <span>{student.name}</span>
                        </div>
                      </TableCell>
                      <TableCell className="font-mono text-sm">{student.studentId}</TableCell>
                      <TableCell>{student.examTitle}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(student.status)}>
                          {student.status === 'in-progress' ? 'In Progress' : 'Completed'}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span className={`${getBehaviorColor(student.behaviorScore)}`}>
                            {student.behaviorScore}
                          </span>
                          {student.behaviorScore >= 80 ? (
                            <UserCheck className="w-4 h-4 text-green-500" />
                          ) : student.behaviorScore < 60 ? (
                            <UserX className="w-4 h-4 text-red-500" />
                          ) : null}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={student.tabSwitches > 3 ? 'destructive' : 'secondary'}>
                          {student.tabSwitches}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <span className={student.suspiciousActivity.includes('High') ? 'text-red-600 dark:text-red-400' : 'text-muted-foreground'}>
                          {student.suspiciousActivity}
                        </span>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm" className="text-[#10B981]">
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Auto-marking Queue */}
        <Card className="animate-in fade-in duration-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-[#10B981]" />
              Auto-Marking Queue
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {autoMarkingQueue.map((item) => (
              <div 
                key={item.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4>{item.studentName}</h4>
                    <Badge variant="secondary">{item.studentId}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.examTitle}</p>
                  <p className="text-xs text-muted-foreground mt-1">Submitted {item.submittedAt}</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <p className="text-2xl text-[#10B981]">{item.aiScore}</p>
                    <p className="text-xs text-muted-foreground">AI Score</p>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      size="sm"
                      className="bg-[#10B981] hover:bg-[#059669] text-white"
                    >
                      Approve
                    </Button>
                    <Button 
                      size="sm"
                      variant="outline"
                    >
                      Edit Marks
                    </Button>
                  </div>
                </div>
              </div>
            ))}

            {autoMarkingQueue.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                <FileCheck className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No submissions in queue</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
