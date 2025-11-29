import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  AlertTriangle, 
  Upload, 
  Camera, 
  ShieldCheck,
  Send,
  FileText,
  Eye,
  EyeOff
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { DigitalTimer } from './DigitalTimer';
import { BehaviorScore } from './BehaviorScore';
import { Alert, AlertDescription } from './ui/alert';
import { Progress } from './ui/progress';

export function ExamRoom() {
  const navigate = useNavigate();
  const { examId } = useParams();
  const [tabSwitches, setTabSwitches] = useState(0);
  const [behaviorScore, setBehaviorScore] = useState(95);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [cameraActive, setCameraActive] = useState(true);

  const examEndTime = new Date();
  examEndTime.setMinutes(examEndTime.getMinutes() + 90);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setTabSwitches(prev => prev + 1);
        setBehaviorScore(prev => Math.max(0, prev - 5));
        setShowWarning(true);
        setTimeout(() => setShowWarning(false), 5000);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (window.confirm('Are you sure you want to submit your exam? This action cannot be undone.')) {
      setIsSubmitted(true);
      setTimeout(() => {
        navigate('/exams');
      }, 3000);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-[#1E293B] flex items-center justify-center p-4">
        <Card className="max-w-md w-full text-center">
          <CardContent className="p-8 space-y-4">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-950/30 rounded-full flex items-center justify-center mx-auto">
              <ShieldCheck className="w-10 h-10 text-[#10B981]" />
            </div>
            <h2 className="text-2xl">Exam Submitted Successfully!</h2>
            <p className="text-muted-foreground">
              Your answers have been recorded. You will be redirected to the exam list.
            </p>
            <div className="pt-4">
              <Progress value={100} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1E293B] text-white">
      {/* Top Bar */}
      <div className="sticky top-0 z-50 bg-[#1E293B] border-b border-gray-700 shadow-lg">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-[#10B981]" />
                <div>
                  <h1 className="text-lg">Data Structures & Algorithms</h1>
                  <p className="text-xs text-gray-400">Exam ID: {examId}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div>
                <p className="text-xs text-gray-400 mb-1">Time Remaining</p>
                <DigitalTimer 
                  targetDate={examEndTime} 
                  size="md" 
                  showLabels={false}
                  warningThreshold={300}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Warning Banner */}
      {showWarning && (
        <div className="bg-red-500 text-white px-6 py-3 animate-in slide-in-from-top duration-300">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            <p>⚠️ Tab switch detected! This incident has been logged. Total switches: {tabSwitches}</p>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 max-w-[1920px] mx-auto">
        {/* Left: Question Paper */}
        <div className="lg:col-span-2 space-y-4">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5 text-[#10B981]" />
                <h2 className="text-xl text-white">Question Paper</h2>
              </div>

              <div className="space-y-6 text-gray-300">
                <div className="p-4 bg-gray-900 rounded-lg">
                  <p className="text-sm text-gray-400 mb-2">Instructions:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Answer all questions</li>
                    <li>Do not switch tabs or leave the exam window</li>
                    <li>AI monitoring is active throughout the exam</li>
                    <li>Upload your answer sheet as PDF before time expires</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="border-l-4 border-[#10B981] pl-4">
                    <h3 className="text-lg mb-2">Question 1 (20 marks)</h3>
                    <p>Explain the time complexity of various sorting algorithms. Compare QuickSort, MergeSort, and HeapSort with examples.</p>
                  </div>

                  <div className="border-l-4 border-[#10B981] pl-4">
                    <h3 className="text-lg mb-2">Question 2 (25 marks)</h3>
                    <p>Implement a balanced binary search tree (AVL Tree) and explain the rotation operations with diagrams.</p>
                  </div>

                  <div className="border-l-4 border-[#10B981] pl-4">
                    <h3 className="text-lg mb-2">Question 3 (30 marks)</h3>
                    <p>Write a program to find the shortest path in a weighted graph using Dijkstra's algorithm. Include code and analysis.</p>
                  </div>

                  <div className="border-l-4 border-[#10B981] pl-4">
                    <h3 className="text-lg mb-2">Question 4 (25 marks)</h3>
                    <p>Discuss dynamic programming with examples. Solve the Knapsack problem and Matrix Chain Multiplication.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Answer Upload Section */}
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <h3 className="text-lg mb-4 text-white flex items-center gap-2">
                <Upload className="w-5 h-5 text-[#10B981]" />
                Upload Answer Sheet
              </h3>

              <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-[#10B981] transition-colors cursor-pointer">
                <input
                  type="file"
                  id="fileUpload"
                  accept=".pdf"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <label htmlFor="fileUpload" className="cursor-pointer">
                  <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                  {uploadedFile ? (
                    <div>
                      <p className="text-[#10B981] mb-2">File uploaded successfully!</p>
                      <p className="text-sm text-gray-400">{uploadedFile.name}</p>
                    </div>
                  ) : (
                    <div>
                      <p className="text-gray-300 mb-2">Click to upload or drag and drop</p>
                      <p className="text-sm text-gray-400">PDF files only (Max 10MB)</p>
                    </div>
                  )}
                </label>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right: Monitoring Panel */}
        <div className="space-y-4">
          {/* Webcam Feed */}
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white flex items-center gap-2">
                  <Camera className="w-5 h-5 text-[#10B981]" />
                  Live Monitoring
                </h3>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setCameraActive(!cameraActive)}
                  className="text-white"
                >
                  {cameraActive ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                </Button>
              </div>

              <div className={`aspect-video rounded-lg border-4 ${cameraActive ? 'border-[#10B981]' : 'border-gray-600'} bg-gray-900 flex items-center justify-center overflow-hidden`}>
                <div className="text-center">
                  <Camera className="w-16 h-16 mx-auto mb-2 text-gray-600" />
                  <p className="text-sm text-gray-400">Webcam Feed</p>
                  <p className="text-xs text-gray-500 mt-1">(Simulated for demo)</p>
                </div>
              </div>

              {cameraActive && (
                <div className="mt-3 p-2 bg-green-900/30 border border-green-700 rounded-lg">
                  <p className="text-xs text-[#10B981] flex items-center gap-1">
                    <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></div>
                    AI Monitoring Active
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Behavior Score */}
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6 flex flex-col items-center">
              <BehaviorScore score={behaviorScore} size="lg" />
              <p className="text-xs text-gray-400 mt-4 text-center">
                Your behavior is being monitored by AI. Maintain good exam ethics.
              </p>
            </CardContent>
          </Card>

          {/* Alerts */}
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-4 space-y-3">
              <h3 className="text-white">Activity Log</h3>
              
              {tabSwitches > 0 && (
                <Alert className="bg-red-900/30 border-red-700">
                  <AlertTriangle className="h-4 w-4 text-red-400" />
                  <AlertDescription className="text-red-200">
                    Tab switches detected: {tabSwitches}
                  </AlertDescription>
                </Alert>
              )}

              <Alert className="bg-green-900/30 border-green-700">
                <ShieldCheck className="h-4 w-4 text-green-400" />
                <AlertDescription className="text-green-200">
                  Face recognition: Active
                </AlertDescription>
              </Alert>

              {uploadedFile && (
                <Alert className="bg-blue-900/30 border-blue-700">
                  <FileText className="h-4 w-4 text-blue-400" />
                  <AlertDescription className="text-blue-200">
                    Answer sheet uploaded
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>

          {/* Submit Button */}
          <Button
            onClick={handleSubmit}
            className="w-full h-14 bg-gradient-to-r from-[#10B981] to-[#22C55E] hover:from-[#059669] hover:to-[#16A34A] text-white shadow-lg"
            disabled={!uploadedFile}
          >
            <Send className="w-5 h-5 mr-2" />
            Submit Exam
          </Button>

          {!uploadedFile && (
            <p className="text-xs text-center text-gray-400">
              Upload your answer sheet to enable submission
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
