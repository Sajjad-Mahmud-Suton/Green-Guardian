import { TeacherSidebar } from './TeacherSidebar';
import { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  BookOpen, 
  Users,
  Plus,
  Trash2,
  Edit,
  Eye
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

const scheduledExams = [
  {
    id: 1,
    title: 'Database Systems Final',
    subject: 'Database Management',
    date: 'Dec 5, 2024',
    time: '10:00 AM',
    duration: '2 hours',
    totalMarks: 100,
    students: 45,
    status: 'scheduled'
  },
  {
    id: 2,
    title: 'Operating Systems Midterm',
    subject: 'Operating Systems',
    date: 'Dec 8, 2024',
    time: '2:00 PM',
    duration: '1.5 hours',
    totalMarks: 75,
    students: 38,
    status: 'scheduled'
  },
  {
    id: 3,
    title: 'Computer Networks Quiz',
    subject: 'Computer Networks',
    date: 'Dec 10, 2024',
    time: '11:00 AM',
    duration: '1 hour',
    totalMarks: 50,
    students: 42,
    status: 'draft'
  },
];

export function CreateExam() {
  const [examTitle, setExamTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState('');
  const [totalMarks, setTotalMarks] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Exam created successfully!');
    // Reset form
    setExamTitle('');
    setSubject('');
    setDate('');
    setTime('');
    setDuration('');
    setTotalMarks('');
    setInstructions('');
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'scheduled':
        return 'bg-green-100 text-green-700 dark:bg-green-950/30 dark:text-green-400';
      case 'draft':
        return 'bg-gray-100 text-gray-700 dark:bg-gray-950/30 dark:text-gray-400';
      default:
        return 'bg-blue-100 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400';
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-[#0F172A]">
      <TeacherSidebar activePage="/teacher/create-exam" />
      
      <div className="flex-1 ml-64">
        <div className="p-8 space-y-8">
          {/* Header */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="text-3xl mb-2">Create & Schedule Exam</h1>
            <p className="text-muted-foreground">Set up a new examination for your students</p>
          </div>

          {/* Create Exam Form */}
          <Card className="animate-in fade-in slide-in-from-bottom-6 duration-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="w-5 h-5 text-[#22C55E]" />
                New Exam Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Exam Title */}
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="examTitle">Exam Title *</Label>
                    <Input
                      id="examTitle"
                      type="text"
                      placeholder="e.g., Advanced Mathematics Final Exam"
                      value={examTitle}
                      onChange={(e) => setExamTitle(e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Select value={subject} onValueChange={setSubject}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mathematics">Mathematics</SelectItem>
                        <SelectItem value="physics">Physics</SelectItem>
                        <SelectItem value="chemistry">Chemistry</SelectItem>
                        <SelectItem value="computer-science">Computer Science</SelectItem>
                        <SelectItem value="database">Database Management</SelectItem>
                        <SelectItem value="algorithms">Data Structures & Algorithms</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Date */}
                  <div className="space-y-2">
                    <Label htmlFor="date">Date *</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="date"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                        className="h-12 pl-10"
                      />
                    </div>
                  </div>

                  {/* Time */}
                  <div className="space-y-2">
                    <Label htmlFor="time">Start Time *</Label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="time"
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                        className="h-12 pl-10"
                      />
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="space-y-2">
                    <Label htmlFor="duration">Duration (in minutes) *</Label>
                    <Input
                      id="duration"
                      type="number"
                      placeholder="e.g., 120"
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      required
                      className="h-12"
                      min="15"
                      max="300"
                    />
                  </div>

                  {/* Total Marks */}
                  <div className="space-y-2">
                    <Label htmlFor="totalMarks">Total Marks *</Label>
                    <Input
                      id="totalMarks"
                      type="number"
                      placeholder="e.g., 100"
                      value={totalMarks}
                      onChange={(e) => setTotalMarks(e.target.value)}
                      required
                      className="h-12"
                      min="1"
                    />
                  </div>

                  {/* Instructions */}
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="instructions">Instructions</Label>
                    <Textarea
                      id="instructions"
                      placeholder="Enter exam instructions for students..."
                      value={instructions}
                      onChange={(e) => setInstructions(e.target.value)}
                      rows={4}
                      className="resize-none"
                    />
                  </div>
                </div>

                {/* AI Settings */}
                <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                  <CardHeader>
                    <CardTitle className="text-base">AI Monitoring Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p>Enable Face Detection</p>
                        <p className="text-sm text-muted-foreground">Verify student identity during exam</p>
                      </div>
                      <input type="checkbox" defaultChecked className="w-5 h-5 accent-[#22C55E]" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p>Tab Switch Detection</p>
                        <p className="text-sm text-muted-foreground">Alert when students switch browser tabs</p>
                      </div>
                      <input type="checkbox" defaultChecked className="w-5 h-5 accent-[#22C55E]" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p>Auto Plagiarism Check</p>
                        <p className="text-sm text-muted-foreground">Check similarity after submission</p>
                      </div>
                      <input type="checkbox" defaultChecked className="w-5 h-5 accent-[#22C55E]" />
                    </div>
                  </CardContent>
                </Card>

                {/* Submit Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    type="submit"
                    className="flex-1 h-12 bg-[#22C55E] hover:bg-[#16A34A] text-white gap-2"
                  >
                    <Plus className="w-5 h-5" />
                    Create & Schedule Exam
                  </Button>
                  <Button 
                    type="button"
                    variant="outline"
                    className="flex-1 h-12"
                  >
                    Save as Draft
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Scheduled Exams Table */}
          <Card className="animate-in fade-in duration-700">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Scheduled Exams</CardTitle>
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400">
                  {scheduledExams.length} Exams
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Exam Title</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Date & Time</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Marks</TableHead>
                      <TableHead>Students</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {scheduledExams.map((exam) => (
                      <TableRow key={exam.id}>
                        <TableCell>
                          <div>
                            <p>{exam.title}</p>
                            <p className="text-xs text-muted-foreground mt-1">ID: EX{exam.id.toString().padStart(3, '0')}</p>
                          </div>
                        </TableCell>
                        <TableCell>{exam.subject}</TableCell>
                        <TableCell>
                          <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-1 text-sm">
                              <Calendar className="w-3 h-3" />
                              {exam.date}
                            </div>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Clock className="w-3 h-3" />
                              {exam.time}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{exam.duration}</TableCell>
                        <TableCell>{exam.totalMarks}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {exam.students}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(exam.status)}>
                            {exam.status.charAt(0).toUpperCase() + exam.status.slice(1)}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
