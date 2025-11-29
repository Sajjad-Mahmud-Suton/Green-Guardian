import { Navbar } from './Navbar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  BookOpen, 
  CheckCircle2, 
  PlayCircle,
  AlertCircle,
  Filter
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { DigitalTimer } from './DigitalTimer';

const upcomingExams = [
  {
    id: 1,
    title: 'Advanced Mathematics',
    subject: 'Mathematics',
    date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    duration: '2 hours',
    totalMarks: 100,
    type: 'Midterm'
  },
  {
    id: 2,
    title: 'Quantum Physics',
    subject: 'Physics',
    date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
    duration: '3 hours',
    totalMarks: 150,
    type: 'Final'
  },
  {
    id: 3,
    title: 'Organic Chemistry',
    subject: 'Chemistry',
    date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    duration: '2.5 hours',
    totalMarks: 120,
    type: 'Midterm'
  },
];

const liveExams = [
  {
    id: 4,
    title: 'Data Structures & Algorithms',
    subject: 'Computer Science',
    startedAt: new Date(Date.now() - 30 * 60 * 1000),
    endsAt: new Date(Date.now() + 90 * 60 * 1000),
    duration: '2 hours',
    totalMarks: 100,
  },
];

const completedExams = [
  {
    id: 5,
    title: 'Calculus II',
    subject: 'Mathematics',
    date: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
    marks: 88,
    totalMarks: 100,
    behaviorScore: 95,
    similarityScore: 12
  },
  {
    id: 6,
    title: 'Classical Mechanics',
    subject: 'Physics',
    date: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000),
    marks: 92,
    totalMarks: 100,
    behaviorScore: 93,
    similarityScore: 8
  },
  {
    id: 7,
    title: 'Thermodynamics',
    subject: 'Physics',
    date: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000),
    marks: 85,
    totalMarks: 100,
    behaviorScore: 90,
    similarityScore: 15
  },
];

export function ExamList() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('upcoming');

  const handleStartExam = (examId: number) => {
    navigate(`/exam/${examId}`);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#1E293B]">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div>
            <h1 className="text-3xl mb-2">My Examinations</h1>
            <p className="text-muted-foreground">Manage your exam schedule and view results</p>
          </div>
          <Button variant="outline" className="gap-2">
            <Filter className="w-4 h-4" />
            Filter
          </Button>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="animate-in fade-in slide-in-from-bottom-6 duration-700">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="live" className="relative">
              Live
              {liveExams.length > 0 && (
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              )}
            </TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>

          {/* Upcoming Exams */}
          <TabsContent value="upcoming" className="space-y-4 mt-6">
            {upcomingExams.map((exam) => (
              <Card key={exam.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="space-y-3 flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl mb-1">{exam.title}</h3>
                          <p className="text-sm text-muted-foreground">{exam.subject}</p>
                        </div>
                        <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400">
                          {exam.type}
                        </Badge>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(exam.date)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {exam.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          {exam.totalMarks} marks
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-3">
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground mb-1">Time remaining</p>
                        <DigitalTimer targetDate={exam.date} size="sm" showLabels={false} />
                      </div>
                      <Button 
                        className="bg-gradient-to-r from-[#10B981] to-[#22C55E] text-white w-full lg:w-auto"
                        onClick={() => alert('Exam not yet available')}
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Live Exams */}
          <TabsContent value="live" className="space-y-4 mt-6">
            {liveExams.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <AlertCircle className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">No live exams at the moment</p>
                </CardContent>
              </Card>
            ) : (
              liveExams.map((exam) => (
                <Card 
                  key={exam.id} 
                  className="border-2 border-red-500 dark:border-red-600 shadow-lg shadow-red-100 dark:shadow-red-900/20 animate-pulse-slow"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="space-y-3 flex-1">
                        <div className="flex items-center gap-2">
                          <Badge className="bg-red-500 text-white animate-pulse">
                            <PlayCircle className="w-3 h-3 mr-1" />
                            LIVE NOW
                          </Badge>
                          <h3 className="text-xl">{exam.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">{exam.subject}</p>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {exam.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <BookOpen className="w-4 h-4" />
                            {exam.totalMarks} marks
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-3">
                        <div className="text-right">
                          <p className="text-xs text-muted-foreground mb-1">Time remaining</p>
                          <DigitalTimer 
                            targetDate={exam.endsAt} 
                            size="md" 
                            showLabels={false}
                            warningThreshold={300}
                          />
                        </div>
                        <Button 
                          className="bg-red-500 hover:bg-red-600 text-white w-full lg:w-auto gap-2"
                          onClick={() => handleStartExam(exam.id)}
                        >
                          <PlayCircle className="w-4 h-4" />
                          Enter Exam Room
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>

          {/* Completed Exams */}
          <TabsContent value="completed" className="space-y-4 mt-6">
            {completedExams.map((exam) => (
              <Card key={exam.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="space-y-3 flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl mb-1">{exam.title}</h3>
                          <p className="text-sm text-muted-foreground">{exam.subject}</p>
                        </div>
                        <Badge className="bg-green-100 text-green-700 dark:bg-green-950/30 dark:text-green-400">
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                          Completed
                        </Badge>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(exam.date)}
                        </div>
                      </div>

                      <div className="flex gap-6 pt-2">
                        <div>
                          <p className="text-xs text-muted-foreground">Score</p>
                          <p className="text-2xl text-[#10B981]">{exam.marks}/{exam.totalMarks}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Behavior</p>
                          <p className="text-2xl">{exam.behaviorScore}/100</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Similarity</p>
                          <p className={`text-2xl ${exam.similarityScore < 30 ? 'text-green-500' : 'text-yellow-500'}`}>
                            {exam.similarityScore}%
                          </p>
                        </div>
                      </div>
                    </div>

                    <Button 
                      variant="outline"
                      onClick={() => navigate('/history')}
                    >
                      View Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
