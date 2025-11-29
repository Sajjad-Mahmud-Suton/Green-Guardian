import { TeacherSidebar } from './TeacherSidebar';
import { useState } from 'react';
import { 
  Camera, 
  AlertTriangle, 
  Flag,
  Eye,
  XCircle,
  Filter,
  Search
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { BehaviorScore } from './BehaviorScore';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';

const liveStudents = [
  {
    id: 1,
    name: 'John Smith',
    studentId: 'STU2024',
    behaviorScore: 95,
    tabSwitches: 0,
    faceDetected: true,
    suspicious: false,
    timeElapsed: '45:23',
    avatar: 'https://images.unsplash.com/photo-1600178572204-6ac8886aae63?w=200'
  },
  {
    id: 2,
    name: 'Emma Johnson',
    studentId: 'STU2025',
    behaviorScore: 68,
    tabSwitches: 4,
    faceDetected: true,
    suspicious: true,
    timeElapsed: '42:15',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200'
  },
  {
    id: 3,
    name: 'Michael Brown',
    studentId: 'STU2026',
    behaviorScore: 88,
    tabSwitches: 1,
    faceDetected: true,
    suspicious: false,
    timeElapsed: '43:50',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200'
  },
  {
    id: 4,
    name: 'Sarah Davis',
    studentId: 'STU2027',
    behaviorScore: 42,
    tabSwitches: 9,
    faceDetected: false,
    suspicious: true,
    timeElapsed: '38:12',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200'
  },
  {
    id: 5,
    name: 'David Wilson',
    studentId: 'STU2028',
    behaviorScore: 92,
    tabSwitches: 0,
    faceDetected: true,
    suspicious: false,
    timeElapsed: '46:05',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200'
  },
  {
    id: 6,
    name: 'Lisa Anderson',
    studentId: 'STU2029',
    behaviorScore: 78,
    tabSwitches: 2,
    faceDetected: true,
    suspicious: false,
    timeElapsed: '44:30',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200'
  },
  {
    id: 7,
    name: 'James Martinez',
    studentId: 'STU2030',
    behaviorScore: 55,
    tabSwitches: 6,
    faceDetected: true,
    suspicious: true,
    timeElapsed: '40:18',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200'
  },
  {
    id: 8,
    name: 'Emily Taylor',
    studentId: 'STU2031',
    behaviorScore: 91,
    tabSwitches: 1,
    faceDetected: true,
    suspicious: false,
    timeElapsed: '45:55',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200'
  },
];

export function LiveMonitoring() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedStudent, setSelectedStudent] = useState<typeof liveStudents[0] | null>(null);

  const filteredStudents = liveStudents.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         student.studentId.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = 
      filterStatus === 'all' || 
      (filterStatus === 'suspicious' && student.suspicious) ||
      (filterStatus === 'clean' && !student.suspicious);
    return matchesSearch && matchesFilter;
  });

  const suspiciousCount = liveStudents.filter(s => s.suspicious).length;
  const avgBehaviorScore = Math.round(liveStudents.reduce((acc, s) => acc + s.behaviorScore, 0) / liveStudents.length);

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-[#0F172A]">
      <TeacherSidebar activePage="/teacher/monitoring" />
      
      <div className="flex-1 ml-64">
        <div className="p-8 space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <h1 className="text-3xl mb-2">Live Exam Monitoring</h1>
              <p className="text-muted-foreground">Data Structures Final - 42 Students Active</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-red-500">LIVE</span>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-6 duration-700">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Active Students</p>
                    <p className="text-3xl">{liveStudents.length}</p>
                  </div>
                  <Eye className="w-8 h-8 text-blue-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Flagged</p>
                    <p className="text-3xl text-red-500">{suspiciousCount}</p>
                  </div>
                  <Flag className="w-8 h-8 text-red-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Avg Behavior</p>
                    <p className="text-3xl text-[#22C55E]">{avgBehaviorScore}</p>
                  </div>
                  <BehaviorScore score={avgBehaviorScore} size="sm" showLabel={false} />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Time Remaining</p>
                    <p className="text-3xl text-amber-500">14:37</p>
                  </div>
                  <AlertTriangle className="w-8 h-8 text-amber-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search students..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
            
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-full md:w-48 h-12">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Students</SelectItem>
                <SelectItem value="suspicious">Flagged Only</SelectItem>
                <SelectItem value="clean">Clean Only</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Student Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-in fade-in duration-700">
            {filteredStudents.map((student) => (
              <Card 
                key={student.id}
                className={`overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  student.suspicious ? 'border-2 border-red-500' : ''
                }`}
                onClick={() => setSelectedStudent(student)}
              >
                <div className="relative">
                  {/* Webcam Feed */}
                  <div className="aspect-video bg-gray-900 flex items-center justify-center relative overflow-hidden">
                    <img 
                      src={student.avatar}
                      alt={student.name}
                      className="w-full h-full object-cover"
                    />
                    {!student.faceDetected && (
                      <div className="absolute inset-0 bg-red-900/80 flex items-center justify-center">
                        <div className="text-center text-white">
                          <AlertTriangle className="w-8 h-8 mx-auto mb-2" />
                          <p className="text-sm">Face Not Detected</p>
                        </div>
                      </div>
                    )}
                    {/* Camera indicator */}
                    <div className="absolute top-2 left-2 flex items-center gap-1 px-2 py-1 bg-black/50 rounded text-white text-xs">
                      <Camera className="w-3 h-3" />
                      <span>Live</span>
                    </div>
                    {/* Flag badge */}
                    {student.suspicious && (
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-red-500 text-white">
                          <Flag className="w-3 h-3 mr-1" />
                          FLAGGED
                        </Badge>
                      </div>
                    )}
                  </div>
                </div>

                <CardContent className="p-4 space-y-3">
                  <div>
                    <h4 className="mb-1 truncate">{student.name}</h4>
                    <p className="text-xs text-muted-foreground font-mono">{student.studentId}</p>
                  </div>

                  <div className="flex items-center justify-center">
                    <BehaviorScore score={student.behaviorScore} size="sm" showLabel={false} />
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Tab switches:</span>
                      <Badge variant={student.tabSwitches > 3 ? 'destructive' : 'secondary'}>
                        {student.tabSwitches}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Time elapsed:</span>
                      <span className="font-mono">{student.timeElapsed}</span>
                    </div>
                  </div>

                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedStudent(student);
                    }}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Student Detail Modal */}
      <Dialog open={!!selectedStudent} onOpenChange={() => setSelectedStudent(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Student Monitoring Detail</DialogTitle>
            <DialogDescription>
              Real-time activity monitoring for {selectedStudent?.name}
            </DialogDescription>
          </DialogHeader>

          {selectedStudent && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                  <img 
                    src={selectedStudent.avatar}
                    alt={selectedStudent.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <BehaviorScore score={selectedStudent.behaviorScore} size="lg" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Student ID</p>
                  <p className="font-mono">{selectedStudent.studentId}</p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Time Elapsed</p>
                  <p className="font-mono">{selectedStudent.timeElapsed}</p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Tab Switches</p>
                  <p className="text-2xl">{selectedStudent.tabSwitches}</p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Face Detection</p>
                  <p className={selectedStudent.faceDetected ? 'text-green-500' : 'text-red-500'}>
                    {selectedStudent.faceDetected ? 'Active' : 'Not Detected'}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <h4>Activity Log</h4>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {selectedStudent.tabSwitches > 0 && (
                    <div className="p-2 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded text-sm">
                      <p className="text-amber-700 dark:text-amber-400">
                        {selectedStudent.tabSwitches} tab switch(es) detected
                      </p>
                    </div>
                  )}
                  {!selectedStudent.faceDetected && (
                    <div className="p-2 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded text-sm">
                      <p className="text-red-700 dark:text-red-400">
                        Face detection lost
                      </p>
                    </div>
                  )}
                  <div className="p-2 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded text-sm">
                    <p className="text-green-700 dark:text-green-400">
                      Exam started successfully
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Button 
                  variant="destructive" 
                  className="flex-1 gap-2"
                  onClick={() => {
                    if (confirm('Are you sure you want to force end this exam for the student?')) {
                      setSelectedStudent(null);
                    }
                  }}
                >
                  <XCircle className="w-4 h-4" />
                  Force End Exam
                </Button>
                {selectedStudent.suspicious && (
                  <Button 
                    variant="outline" 
                    className="flex-1 gap-2"
                  >
                    <Flag className="w-4 h-4" />
                    Add to Review Queue
                  </Button>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
