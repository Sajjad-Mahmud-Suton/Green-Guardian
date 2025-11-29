import { Navbar } from './Navbar';
import { useState } from 'react';
import { 
  TrendingUp, 
  Award, 
  FileText,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  CheckCircle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { SimilarityBadge } from './SimilarityBadge';
import { BehaviorScore } from './BehaviorScore';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const examHistory = [
  {
    id: 1,
    title: 'Calculus II',
    subject: 'Mathematics',
    date: 'Nov 17, 2024',
    marks: 88,
    totalMarks: 100,
    behaviorScore: 95,
    similarityScore: 12,
    similarityBreakdown: [
      { source: 'Original Content', value: 88, color: '#10B981' },
      { source: 'Reference Material', value: 8, color: '#FBBF24' },
      { source: 'Potential Match', value: 4, color: '#F59E0B' },
    ],
    detailedReport: {
      totalQuestions: 10,
      correctAnswers: 9,
      partialCredit: 1,
      timeSpent: '1h 45m',
      averageScore: 75,
      rank: 5,
      totalStudents: 120
    }
  },
  {
    id: 2,
    title: 'Classical Mechanics',
    subject: 'Physics',
    date: 'Nov 12, 2024',
    marks: 92,
    totalMarks: 100,
    behaviorScore: 93,
    similarityScore: 8,
    similarityBreakdown: [
      { source: 'Original Content', value: 92, color: '#10B981' },
      { source: 'Reference Material', value: 6, color: '#FBBF24' },
      { source: 'Potential Match', value: 2, color: '#F59E0B' },
    ],
    detailedReport: {
      totalQuestions: 8,
      correctAnswers: 7,
      partialCredit: 2,
      timeSpent: '2h 10m',
      averageScore: 78,
      rank: 3,
      totalStudents: 115
    }
  },
  {
    id: 3,
    title: 'Thermodynamics',
    subject: 'Physics',
    date: 'Nov 7, 2024',
    marks: 85,
    totalMarks: 100,
    behaviorScore: 90,
    similarityScore: 15,
    similarityBreakdown: [
      { source: 'Original Content', value: 85, color: '#10B981' },
      { source: 'Reference Material', value: 10, color: '#FBBF24' },
      { source: 'Potential Match', value: 5, color: '#F59E0B' },
    ],
    detailedReport: {
      totalQuestions: 12,
      correctAnswers: 10,
      partialCredit: 2,
      timeSpent: '2h 30m',
      averageScore: 72,
      rank: 7,
      totalStudents: 110
    }
  },
];

const performanceHistory = [
  { exam: 'Exam 1', marks: 75, behavior: 85 },
  { exam: 'Exam 2', marks: 82, behavior: 88 },
  { exam: 'Exam 3', marks: 85, behavior: 90 },
  { exam: 'Exam 4', marks: 88, behavior: 95 },
  { exam: 'Exam 5', marks: 92, behavior: 93 },
];

export function ExamHistory() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const averageMarks = examHistory.reduce((acc, exam) => acc + exam.marks, 0) / examHistory.length;
  const averageBehavior = examHistory.reduce((acc, exam) => acc + exam.behaviorScore, 0) / examHistory.length;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#1E293B]">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Header */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h1 className="text-3xl mb-2">Exam History & Reports</h1>
          <p className="text-muted-foreground">View your past exam performance and similarity analysis</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Average Score</p>
                  <p className="text-3xl">{averageMarks.toFixed(1)}%</p>
                </div>
                <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Avg Behavior</p>
                  <p className="text-3xl">{averageBehavior.toFixed(0)}/100</p>
                </div>
                <div className="p-3 bg-gradient-to-br from-[#10B981] to-[#22C55E] rounded-xl">
                  <Award className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Exams</p>
                  <p className="text-3xl">{examHistory.length}</p>
                </div>
                <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl">
                  <FileText className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Trend */}
        <Card className="animate-in fade-in slide-in-from-bottom-8 duration-700">
          <CardHeader>
            <CardTitle>Performance Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceHistory}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis dataKey="exam" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="marks" 
                  stroke="#10B981" 
                  strokeWidth={3}
                  name="Marks"
                  dot={{ fill: '#10B981', r: 5 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="behavior" 
                  stroke="#22C55E" 
                  strokeWidth={3}
                  name="Behavior Score"
                  dot={{ fill: '#22C55E', r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Exam List */}
        <div className="space-y-4 animate-in fade-in duration-700">
          <h2 className="text-2xl">Past Examinations</h2>
          
          {examHistory.map((exam) => (
            <Card key={exam.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                {/* Main Info */}
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl mb-1">{exam.title}</h3>
                          <p className="text-sm text-muted-foreground">{exam.subject} • {exam.date}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 mt-4">
                        <div className="flex items-center gap-2">
                          <div className="text-center">
                            <p className="text-2xl text-[#10B981]">{exam.marks}/{exam.totalMarks}</p>
                            <p className="text-xs text-muted-foreground">Score</p>
                          </div>
                        </div>

                        <div className="border-l pl-4">
                          <BehaviorScore score={exam.behaviorScore} size="sm" showLabel={false} />
                          <p className="text-xs text-muted-foreground text-center mt-1">Behavior</p>
                        </div>

                        <div className="border-l pl-4 flex items-center">
                          <SimilarityBadge percentage={exam.similarityScore} size="md" />
                        </div>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      onClick={() => toggleExpand(exam.id)}
                      className="gap-2 w-full lg:w-auto"
                    >
                      {expandedId === exam.id ? (
                        <>
                          Hide Report
                          <ChevronUp className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                          View Report
                          <ChevronDown className="w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                {/* Expanded Details */}
                {expandedId === exam.id && (
                  <div className="border-t bg-gray-50 dark:bg-gray-800/50 p-6 space-y-6 animate-in slide-in-from-top duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Similarity Breakdown */}
                      <div>
                        <h4 className="mb-4 flex items-center gap-2">
                          <AlertCircle className="w-5 h-5 text-[#10B981]" />
                          Similarity Analysis
                        </h4>
                        <div className="flex items-center gap-6">
                          <ResponsiveContainer width={200} height={200}>
                            <PieChart>
                              <Pie
                                data={exam.similarityBreakdown}
                                cx="50%"
                                cy="50%"
                                innerRadius={50}
                                outerRadius={80}
                                dataKey="value"
                                label
                              >
                                {exam.similarityBreakdown.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                              </Pie>
                            </PieChart>
                          </ResponsiveContainer>
                          <div className="space-y-2">
                            {exam.similarityBreakdown.map((item, index) => (
                              <div key={index} className="flex items-center gap-2">
                                <div 
                                  className="w-3 h-3 rounded-full" 
                                  style={{ backgroundColor: item.color }}
                                ></div>
                                <div>
                                  <p className="text-sm">{item.source}</p>
                                  <p className="text-xs text-muted-foreground">{item.value}%</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {exam.similarityScore < 30 && (
                          <div className="mt-4 p-3 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-sm text-green-700 dark:text-green-400">Excellent Originality</p>
                              <p className="text-xs text-green-600 dark:text-green-500 mt-1">
                                Your work shows high levels of original content
                              </p>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Detailed Stats */}
                      <div>
                        <h4 className="mb-4 flex items-center gap-2">
                          <FileText className="w-5 h-5 text-[#10B981]" />
                          Detailed Statistics
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-3 bg-white dark:bg-gray-900 rounded-lg">
                            <p className="text-xs text-muted-foreground mb-1">Questions</p>
                            <p className="text-xl">{exam.detailedReport.totalQuestions}</p>
                          </div>
                          <div className="p-3 bg-white dark:bg-gray-900 rounded-lg">
                            <p className="text-xs text-muted-foreground mb-1">Correct</p>
                            <p className="text-xl text-green-500">{exam.detailedReport.correctAnswers}</p>
                          </div>
                          <div className="p-3 bg-white dark:bg-gray-900 rounded-lg">
                            <p className="text-xs text-muted-foreground mb-1">Time Spent</p>
                            <p className="text-xl">{exam.detailedReport.timeSpent}</p>
                          </div>
                          <div className="p-3 bg-white dark:bg-gray-900 rounded-lg">
                            <p className="text-xs text-muted-foreground mb-1">Class Rank</p>
                            <p className="text-xl text-blue-500">
                              {exam.detailedReport.rank}/{exam.detailedReport.totalStudents}
                            </p>
                          </div>
                        </div>

                        <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <p className="text-sm">Your Score</p>
                            <p className="text-sm">{exam.marks}%</p>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-muted-foreground">Class Average</p>
                            <p className="text-sm text-muted-foreground">{exam.detailedReport.averageScore}%</p>
                          </div>
                          <div className="mt-2 text-xs text-blue-600 dark:text-blue-400">
                            You scored {exam.marks - exam.detailedReport.averageScore}% above average
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
