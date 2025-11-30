import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ShieldCheck, Moon, Sun, LogOut, User, Settings, Bell } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
    try {
      const raw = sessionStorage.getItem('gg_user');
      if (raw) setUser(JSON.parse(raw));
    } catch {}
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  const handleLogout = () => {
    navigate('/');
  };

  const navItems = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/exams', label: 'Exams' },
    { path: '/history', label: 'History' },
    { path: '/notices', label: 'Notices' },
    { path: '/profile', label: 'Profile' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => navigate('/dashboard')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[#10B981] to-[#22C55E] rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg">Green Guardian</h1>
              <p className="text-xs text-muted-foreground">Student Portal</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant="ghost"
                className={`${
                  location.pathname === item.path
                    ? 'bg-green-50 dark:bg-green-950/30 text-[#10B981]'
                    : ''
                }`}
                onClick={() => navigate(item.path)}
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            {/* Notifications */}
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-[#10B981] rounded-full"></span>
            </Button>

            {/* Theme Toggle */}
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar>
                    {user?.avatar ? (
                      <AvatarImage src={user.avatar} />
                    ) : (
                      <AvatarImage src="https://images.unsplash.com/photo-1600178572204-6ac8886aae63?w=100" />
                    )}
                    <AvatarFallback>{user?.name ? user.name.split(' ').map(n=>n[0]).slice(0,2).join('') : 'JS'}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel>
                  <div className="flex flex-col space-y-1">
                    <p>{user?.name ?? 'John Smith'}</p>
                    <p className="text-xs text-muted-foreground">{user?.id ?? 'STU2024'}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate('/profile')}>
                  <User className="mr-2 h-4 w-4" />
                  My Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
