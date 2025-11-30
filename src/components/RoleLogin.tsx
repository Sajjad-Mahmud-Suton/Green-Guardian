import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, GraduationCap, UserCog } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

export function RoleLogin() {
  const navigate = useNavigate();
  const [role, setRole] = useState<'student' | 'teacher'>('student');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [attempts, setAttempts] = useState(3);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (role === 'student' && userId === 'STU2024' && password === 'demo123') {
      // temporary session-only student info (Bangladeshi sample)
      const studentData = {
        role: 'student',
        name: 'Md. Arif Hossain',
        id: 'STU2024',
        department: 'Computer Science & Engineering',
        batch: '2024 Batch',
        semester: '2nd Semester',
        campus: 'Main Campus, Building A',
        email: 'arif.hossain@university.edu.bd',
        phone: '+8801712345678',
        dob: '2002-03-12',
        enrollmentDate: '2023-08-20',
        // male portrait for student demo
        avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200'
      };
      try { sessionStorage.setItem('gg_user', JSON.stringify(studentData)); } catch {};
      navigate('/dashboard');
    } else if (role === 'teacher' && userId === 'TCH2024' && password === 'admin123') {
      // temporary session-only teacher info (Bangladeshi sample)
      const teacherData = {
        role: 'teacher',
        name: 'Mr. Montaser Abdul Quader',
        id: 'TCH2024',
        title: 'Senior Lecturer',
        department: 'Computer Science & Engineering',
        email: 'montaser.quader@university.edu.bd',
        phone: '+8801834567890',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200'
      };
      try { sessionStorage.setItem('gg_user', JSON.stringify(teacherData)); } catch {};
      navigate('/teacher/dashboard');
    } else {
      setError('Invalid credentials');
      setAttempts(prev => prev - 1);
      
      if (attempts <= 1) {
        setError('Account locked. Contact administrator.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-[#1E293B] dark:to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Header */}
        <div className="text-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#22C55E] to-[#10B981] rounded-2xl mb-4 shadow-lg shadow-green-200 dark:shadow-green-900/30">
            <ShieldCheck className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl mb-2">Green Guardian</h1>
          <p className="text-muted-foreground">AI-Powered Fair Examination System</p>
        </div>

        {/* Login Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <form onSubmit={handleLogin} className="space-y-5">
            {/* Role Selection */}
            <div className="space-y-2">
              <Label htmlFor="role">Login as</Label>
              <Select value={role} onValueChange={(value: 'student' | 'teacher') => setRole(value)}>
                <SelectTrigger className="h-12">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4" />
                      <span>Student 👨‍🎓</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="teacher">
                    <div className="flex items-center gap-2">
                      <UserCog className="w-4 h-4" />
                      <span>Teacher 👩‍🏫</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* User ID */}
            <div className="space-y-2">
              <Label htmlFor="userId">
                {role === 'student' ? 'Student ID' : 'Teacher ID'}
              </Label>
              <Input
                id="userId"
                type="text"
                placeholder={role === 'student' ? 'Enter your student ID' : 'Enter your teacher ID'}
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="h-12"
                required
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12"
                required
              />
            </div>

            {error && (
              <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-3 text-sm text-red-700 dark:text-red-400">
                {error}
              </div>
            )}

            {attempts < 3 && attempts > 0 && (
              <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-3 text-sm text-amber-700 dark:text-amber-400">
                Incorrect attempts remaining: {attempts}
              </div>
            )}

            <Button 
              type="submit" 
              className="w-full h-12 bg-gradient-to-r from-[#22C55E] to-[#10B981] hover:from-[#16A34A] hover:to-[#059669] text-white shadow-lg shadow-green-200 dark:shadow-green-900/30 transition-all duration-300"
              disabled={attempts <= 0}
            >
              Login
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            <p>Demo Credentials:</p>
            <p className="font-mono text-xs mt-1">
              Student: STU2024 / demo123
            </p>
            <p className="font-mono text-xs">
              Teacher: TCH2024 / admin123
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-muted-foreground">
          <p>© 2024 Green Guardian. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
