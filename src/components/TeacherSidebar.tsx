import { useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  PlusCircle, 
  BookOpen, 
  Monitor, 
  Users, 
  ClipboardCheck,
  Bell,
  BarChart3,
  ShieldCheck,
  LogOut,
  Sun,
  Moon
} from 'lucide-react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { useState, useEffect } from 'react';

interface TeacherSidebarProps {
  activePage?: string;
}

export function TeacherSidebar({ activePage }: TeacherSidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/teacher/dashboard' },
    { icon: PlusCircle, label: 'Create Exam', path: '/teacher/create-exam' },
    { icon: BookOpen, label: 'All Exams', path: '/teacher/exams' },
    { icon: Monitor, label: 'Live Monitoring', path: '/teacher/monitoring' },
    { icon: Users, label: 'Students', path: '/teacher/students' },
    { icon: ClipboardCheck, label: 'Marking Queue', path: '/teacher/marking' },
    { icon: Bell, label: 'Notices', path: '/teacher/notices' },
    { icon: BarChart3, label: 'Reports', path: '/teacher/reports' },
  ];

  const currentPath = activePage || location.pathname;

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="w-64 h-screen bg-[#1E293B] text-white flex flex-col fixed left-0 top-0 shadow-2xl">
      {/* Logo */}
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-gradient-to-br from-[#22C55E] to-[#10B981] rounded-lg flex items-center justify-center">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg">Green Guardian</h1>
            <p className="text-xs text-gray-400">Teacher Portal</p>
          </div>
        </div>
      </div>

      {/* Profile */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center gap-3">
          <Avatar className="w-12 h-12">
            <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" />
            <AvatarFallback>Dr. SE</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="truncate">Dr. Sarah Evans</p>
            <p className="text-xs text-gray-400 truncate">Computer Science</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        {menuItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`w-full flex items-center gap-3 px-6 py-3 transition-all duration-200 ${
              currentPath === item.path
                ? 'bg-[#22C55E] text-white shadow-lg'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-gray-700 space-y-2">
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 text-gray-300 hover:text-white hover:bg-gray-700"
          onClick={toggleTheme}
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          <span>Theme</span>
        </Button>

        <Button
          variant="ghost"
          className="w-full justify-start gap-3 text-red-400 hover:text-red-300 hover:bg-red-950/30"
          onClick={handleLogout}
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </Button>
      </div>
    </div>
  );
}
