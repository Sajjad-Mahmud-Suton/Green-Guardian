import { TeacherSidebar } from './TeacherSidebar';
import { useState } from 'react';
import { 
  FileText, 
  CheckCircle, 
  AlertTriangle,
  Eye,
  Edit,
  Download,
  ThumbsUp,
  ThumbsDown,
  Search,
  Filter
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { SimilarityBadge } from './SimilarityBadge';
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from 'recharts';

const submissions = [
  {
    id: 1,
    studentName: 'John Smith',
    studentId: 'STU2024',
    examTitle: 'Data Structures Final',
    submittedAt: '2 hours ago',
    aiScore: 88,
    behaviorScore: 95,
    similarityScore: 12,
    status: 'pending',
    plagiarismDetails: [
      { source: 'Original Content', value: 88, color: '#22C55E' },
      { source: 'Reference Material', value: 8, color: '#FBBF24' },
      { source: 'Potential Match', value: 4, color: '#F59E0B' },
    ]
  },
  {
    id: 2,
    studentName: 'Emma Johnson',
    studentId: 'STU2025',
    examTitle: 'Data Structures Final',
    submittedAt: '1 hour ago',
    aiScore: 72,
    behaviorScore: 68,
    similarityScore: 45,
    status: 'flagged',
    plagiarismDetails: [
      { source: 'Original Content', value: 55, color: '#22C55E' },
      { source: 'Reference Material', value: 30, color: '#FBBF24' },
      { source: 'Potential Match', value: 15, color: '#F59E0B' },
    ]
  },
  {
    id: 3,
    studentName: 'Michael Brown',
    studentId: 'STU2026',
    examTitle: 'Data Structures Final',
    submittedAt: '3 hours ago',
    aiScore: 92,
    behaviorScore: 88,
    similarityScore: 8,
    status: 'reviewed',
    plagiarismDetails: [
      { source: 'Original Content', value: 92, color: '#22C55E' },
      { source: 'Reference Material', value: 6, color: '#FBBF24' },
      { source: 'Potential Match', value: 2, color: '#F59E0B' },
    ]
  },
  {
    id: 4,
    studentName: 'Sarah Davis',
    studentId: 'STU2027',
    examTitle: 'Data Structures Final',
    submittedAt: '30 minutes ago',
    aiScore: 65,
    behaviorScore: 42,
    similarityScore: 78,
    status: 'flagged',
    plagiarismDetails: [
      { source: 'Original Content', value: 22, color: '#22C55E' },
      { source: 'Reference Material', value: 45, color: '#FBBF24' },
      { source: 'Potential Match', value: 33, color: '#EF4444' },
    ]
  },
  {
    id: 5,
    studentName: 'David Wilson',
    studentId: 'STU2028',
    examTitle: 'Data Structures Final',
    submittedAt: '4 hours ago',
    aiScore: 95,
    behaviorScore: 92,
    similarityScore: 5,
    status: 'approved',
    plagiarismDetails: [
      { source: 'Original Content', value: 95, color: '#22C55E' },
      { source: 'Reference Material', value: 4, color: '#FBBF24' },
      { source: 'Potential Match', value: 1, color: '#F59E0B' },
    ]
  },
];

export function MarkingQueue() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedSubmission, setSelectedSubmission] = useState<typeof submissions[0] | null>(null);
  const [manualScore, setManualScore] = useState('');

  const filteredSubmissions = submissions.filter(sub => {
    const matchesSearch = sub.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         sub.studentId.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' || sub.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const pendingCount = submissions.filter(s => s.status === 'pending').length;
  const flaggedCount = submissions.filter(s => s.status === 'flagged').length;

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'pending':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400';
      case 'flagged':
        return 'bg-red-100 text-red-700 dark:bg-red-950/30 dark:text-red-400';
      case 'reviewed':
        return 'bg-amber-100 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400';
      case 'approved':
        return 'bg-green-100 text-green-700 dark:bg-green-950/30 dark:text-green-400';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-950/30 dark:text-gray-400';
    }
  };

  const handleApprove = (id: number) => {
    alert(`Submission ${id} approved!`);
  };

  const handleReject = (id: number) => {
    if (confirm('Are you sure you want to reject this submission?')) {
      alert(`Submission ${id} rejected!`);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-[#0F172A]">
      <TeacherSidebar activePage="/teacher/marking" />
      
      <div className="flex-1 ml-64">
        <div className="p-8 space-y-8">
          {/* Header */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="text-3xl mb-2">AI Marking & Plagiarism Queue</h1>
            <p className="text-muted-foreground">Review auto-marked submissions and plagiarism reports</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-6 duration-700">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Total Queue</p>
                    <p className="text-3xl">{submissions.length}</p>
                  </div>
                  <FileText className="w-8 h-8 text-blue-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Pending Review</p>
                    <p className="text-3xl text-blue-500">{pendingCount}</p>
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
                    <p className="text-3xl text-red-500">{flaggedCount}</p>
                  </div>
                  <AlertTriangle className="w-8 h-8 text-red-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Approved Today</p>
                    <p className="text-3xl text-green-500">18</p>
                  </div>
                  <CheckCircle className="w-8 h-8 text-green-500" />
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
                placeholder="Search submissions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
            
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-full md:w-48 h-12">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="flagged">Flagged</SelectItem>
                <SelectItem value="reviewed">Reviewed</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Submissions Table */}
          <Card className="animate-in fade-in duration-700">
            <CardHeader>
              <CardTitle>Submission Queue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Student</TableHead>
                      <TableHead>Exam</TableHead>
                      <TableHead>Submitted</TableHead>
                      <TableHead>AI Score</TableHead>
                      <TableHead>Behavior</TableHead>
                      <TableHead>Similarity</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredSubmissions.map((submission) => (
                      <TableRow key={submission.id}>
                        <TableCell>
                          <div>
                            <p>{submission.studentName}</p>
                            <p className="text-xs text-muted-foreground font-mono">{submission.studentId}</p>
                          </div>
                        </TableCell>
                        <TableCell>{submission.examTitle}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{submission.submittedAt}</TableCell>
                        <TableCell>
                          <span className="text-lg">{submission.aiScore}</span>
                          <span className="text-sm text-muted-foreground">/100</span>
                        </TableCell>
                        <TableCell>
                          <span className={
                            submission.behaviorScore >= 80 ? 'text-green-500' :
                            submission.behaviorScore >= 60 ? 'text-yellow-500' :
                            'text-red-500'
                          }>
                            {submission.behaviorScore}
                          </span>
                        </TableCell>
                        <TableCell>
                          <SimilarityBadge percentage={submission.similarityScore} size="sm" showIcon={false} />
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(submission.status)}>
                            {submission.status.charAt(0).toUpperCase() + submission.status.slice(1)}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => setSelectedSubmission(submission)}
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                            {submission.status === 'pending' && (
                              <>
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  className="text-green-500 hover:text-green-700"
                                  onClick={() => handleApprove(submission.id)}
                                >
                                  <ThumbsUp className="w-4 h-4" />
                                </Button>
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  className="text-red-500 hover:text-red-700"
                                  onClick={() => handleReject(submission.id)}
                                >
                                  <ThumbsDown className="w-4 h-4" />
                                </Button>
                              </>
                            )}
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

      {/* Detail Modal */}
      <Dialog open={!!selectedSubmission} onOpenChange={() => setSelectedSubmission(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Submission Review</DialogTitle>
            <DialogDescription>
              Detailed review for {selectedSubmission?.studentName}
            </DialogDescription>
          </DialogHeader>

          {selectedSubmission && (
            <div className="space-y-6">
              {/* Student Info */}
              <div className="grid grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <p className="text-sm text-muted-foreground mb-1">AI Score</p>
                    <p className="text-3xl text-[#22C55E]">{selectedSubmission.aiScore}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <p className="text-sm text-muted-foreground mb-1">Behavior Score</p>
                    <p className="text-3xl">{selectedSubmission.behaviorScore}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <p className="text-sm text-muted-foreground mb-1">Similarity</p>
                    <SimilarityBadge percentage={selectedSubmission.similarityScore} size="lg" />
                  </CardContent>
                </Card>
              </div>

              {/* Plagiarism Analysis */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Plagiarism Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-8">
                    <ResponsiveContainer width={200} height={200}>
                      <PieChart>
                        <Pie
                          data={selectedSubmission.plagiarismDetails}
                          cx="50%"
                          cy="50%"
                          innerRadius={50}
                          outerRadius={80}
                          dataKey="value"
                          label
                        >
                          {selectedSubmission.plagiarismDetails.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="space-y-3 flex-1">
                      {selectedSubmission.plagiarismDetails.map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div 
                              className="w-3 h-3 rounded-full" 
                              style={{ backgroundColor: item.color }}
                            ></div>
                            <span className="text-sm">{item.source}</span>
                          </div>
                          <span className="font-mono">{item.value}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Manual Override */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Manual Score Override</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-4 items-end">
                    <div className="flex-1">
                      <Label htmlFor="manualScore">Enter Final Score</Label>
                      <Input
                        id="manualScore"
                        type="number"
                        placeholder="Enter score (0-100)"
                        value={manualScore}
                        onChange={(e) => setManualScore(e.target.value)}
                        min="0"
                        max="100"
                        className="h-12"
                      />
                    </div>
                    <Button className="h-12 gap-2">
                      <Edit className="w-4 h-4" />
                      Update Score
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    AI suggested score: {selectedSubmission.aiScore}/100
                  </p>
                </CardContent>
              </Card>

              {/* Actions */}
              <div className="flex gap-3">
                <Button 
                  className="flex-1 h-12 bg-[#22C55E] hover:bg-[#16A34A] text-white gap-2"
                  onClick={() => {
                    handleApprove(selectedSubmission.id);
                    setSelectedSubmission(null);
                  }}
                >
                  <CheckCircle className="w-5 h-5" />
                  Approve & Publish
                </Button>
                <Button 
                  variant="outline"
                  className="flex-1 h-12 gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Answer Sheet
                </Button>
                <Button 
                  variant="destructive"
                  className="h-12 gap-2"
                  onClick={() => {
                    handleReject(selectedSubmission.id);
                    setSelectedSubmission(null);
                  }}
                >
                  <ThumbsDown className="w-5 h-5" />
                  Reject
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
