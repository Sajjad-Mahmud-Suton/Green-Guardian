import { Navbar } from './Navbar';
import { 
  Mail, 
  Phone, 
  Calendar, 
  BookOpen, 
  Award,
  MapPin,
  Edit,
  Camera
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const recentPerformance = [
  { exam: 'Math', score: 88 },
  { exam: 'Physics', score: 92 },
  { exam: 'Chem', score: 85 },
  { exam: 'Bio', score: 90 },
  { exam: 'CS', score: 95 },
];

const attendanceData = [
  { month: 'Jan', attendance: 95 },
  { month: 'Feb', attendance: 92 },
  { month: 'Mar', attendance: 88 },
  { month: 'Apr', attendance: 94 },
  { month: 'May', attendance: 97 },
  { month: 'Jun', attendance: 96 },
];

export function StudentProfile() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#1E293B]">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Header */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h1 className="text-3xl mb-2">My Profile</h1>
          <p className="text-muted-foreground">View and manage your academic information</p>
        </div>

        {/* Profile Card */}
        <Card className="animate-in fade-in slide-in-from-bottom-6 duration-700">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Avatar Section */}
              <div className="flex flex-col items-center gap-4">
                <div className="relative group">
                  <Avatar className="w-32 h-32">
                    <AvatarImage src="https://images.unsplash.com/photo-1600178572204-6ac8886aae63?w=200" />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <Button 
                    size="icon"
                    className="absolute bottom-0 right-0 rounded-full w-10 h-10 bg-[#22C55E] hover:bg-[#16A34A] opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Camera className="w-5 h-5" />
                  </Button>
                </div>
                <div className="text-center">
                  <h2 className="text-2xl mb-1">John Smith</h2>
                  <p className="text-muted-foreground mb-2">Computer Science Student</p>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-950/30 dark:text-green-400">
                    Active
                  </Badge>
                </div>
              </div>

              {/* Details Section */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-950/30 rounded-lg">
                      <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Student ID</p>
                      <p className="font-mono">STU2024</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-purple-100 dark:bg-purple-950/30 rounded-lg">
                      <Award className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Department</p>
                      <p>Computer Science & Engineering</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-green-100 dark:bg-green-950/30 rounded-lg">
                      <Calendar className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Batch / Semester</p>
                      <p>2024 Batch • 2nd Semester</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-orange-100 dark:bg-orange-950/30 rounded-lg">
                      <MapPin className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Campus</p>
                      <p>Main Campus, Building A</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-cyan-100 dark:bg-cyan-950/30 rounded-lg">
                      <Mail className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email Address</p>
                      <p>john.smith@university.edu</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-pink-100 dark:bg-pink-950/30 rounded-lg">
                      <Phone className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone Number</p>
                      <p>+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-950/30 rounded-lg">
                      <Calendar className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Date of Birth</p>
                      <p>January 15, 2002</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-teal-100 dark:bg-teal-950/30 rounded-lg">
                      <Award className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Enrollment Date</p>
                      <p>August 20, 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t flex justify-end">
              <Button className="gap-2 bg-[#22C55E] hover:bg-[#16A34A]">
                <Edit className="w-4 h-4" />
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Overall GPA</p>
                <p className="text-4xl text-[#22C55E] mb-1">3.85</p>
                <p className="text-xs text-muted-foreground">out of 4.0</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Total Credits</p>
                <p className="text-4xl mb-1">42</p>
                <p className="text-xs text-muted-foreground">120 required</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Attendance</p>
                <p className="text-4xl text-blue-500 mb-1">94%</p>
                <p className="text-xs text-muted-foreground">This semester</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Class Rank</p>
                <p className="text-4xl text-purple-500 mb-1">5th</p>
                <p className="text-xs text-muted-foreground">of 120 students</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-in fade-in duration-700">
          <Card>
            <CardHeader>
              <CardTitle>Recent Exam Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={recentPerformance}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                  <XAxis dataKey="exam" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Bar dataKey="score" fill="#22C55E" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Attendance Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={attendanceData}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                  <XAxis dataKey="month" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="attendance" 
                    stroke="#22C55E" 
                    strokeWidth={3}
                    dot={{ fill: '#22C55E', r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
