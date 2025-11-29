import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { RoleLogin } from './components/RoleLogin';
import { Dashboard } from './components/Dashboard';
import { StudentProfile } from './components/StudentProfile';
import { ExamList } from './components/ExamList';
import { ExamRoom } from './components/ExamRoom';
import { ExamHistory } from './components/ExamHistory';
import { Notices } from './components/Notices';
import { TeacherDashboard } from './components/TeacherDashboard';
import { LiveMonitoring } from './components/LiveMonitoring';
import { CreateExam } from './components/CreateExam';
import { MarkingQueue } from './components/MarkingQueue';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Login */}
        <Route path="/" element={<RoleLogin />} />
        
        {/* Student Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<StudentProfile />} />
        <Route path="/exams" element={<ExamList />} />
        <Route path="/exam/:examId" element={<ExamRoom />} />
        <Route path="/history" element={<ExamHistory />} />
        <Route path="/notices" element={<Notices />} />
        
        {/* Teacher Routes */}
        <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
        <Route path="/teacher/create-exam" element={<CreateExam />} />
        <Route path="/teacher/monitoring" element={<LiveMonitoring />} />
        <Route path="/teacher/marking" element={<MarkingQueue />} />
        <Route path="/teacher/exams" element={<TeacherDashboard />} />
        <Route path="/teacher/students" element={<TeacherDashboard />} />
        <Route path="/teacher/notices" element={<TeacherDashboard />} />
        <Route path="/teacher/reports" element={<TeacherDashboard />} />
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
