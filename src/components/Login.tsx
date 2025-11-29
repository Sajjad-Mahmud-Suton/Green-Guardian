import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, ShieldCheck } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

export function Login() {
  const navigate = useNavigate();
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [attempts, setAttempts] = useState(3);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (studentId === 'STU2024' && password === 'demo123') {
      navigate('/dashboard');
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
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#10B981] to-[#22C55E] rounded-2xl mb-4 shadow-lg shadow-green-200 dark:shadow-green-900/30">
            <ShieldCheck className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl mb-2">Green Guardian</h1>
          <p className="text-muted-foreground">AI-Powered Fair Examination System</p>
        </div>

        {/* Login Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="w-6 h-6 text-[#10B981]" />
            <h2 className="text-xl">Student Login</h2>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="studentId">Student ID</Label>
              <Input
                id="studentId"
                type="text"
                placeholder="Enter your student ID"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                className="h-12"
                required
              />
            </div>

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
              className="w-full h-12 bg-gradient-to-r from-[#10B981] to-[#22C55E] hover:from-[#059669] hover:to-[#16A34A] text-white shadow-lg shadow-green-200 dark:shadow-green-900/30 transition-all duration-300"
              disabled={attempts <= 0}
            >
              Login
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            <p>Demo Credentials:</p>
            <p className="font-mono text-xs mt-1">ID: STU2024 | Pass: demo123</p>
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
