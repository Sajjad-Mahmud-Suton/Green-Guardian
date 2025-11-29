import { Navbar } from './Navbar';
import { useState } from 'react';
import { Search, Bell, Calendar, Pin, Filter } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

const notices = [
  {
    id: 1,
    title: 'Final Examinations Schedule - Winter 2024',
    category: 'Exams',
    date: 'Nov 25, 2024',
    isPinned: true,
    image: 'https://images.unsplash.com/photo-1613059550870-63bbef4744e3?w=600',
    excerpt: 'The final examination schedule for Winter 2024 semester has been released. Please check your individual timetables.'
  },
  {
    id: 2,
    title: 'New AI Proctoring System Implementation',
    category: 'Technology',
    date: 'Nov 24, 2024',
    isPinned: true,
    image: 'https://images.unsplash.com/photo-1762438135827-428acc0e8941?w=600',
    excerpt: 'Green Guardian now includes advanced AI monitoring features for enhanced exam security and fairness.'
  },
  {
    id: 3,
    title: 'Academic Calendar Update - Spring 2025',
    category: 'General',
    date: 'Nov 22, 2024',
    isPinned: false,
    image: 'https://images.unsplash.com/photo-1719342399567-4b31027198b6?w=600',
    excerpt: 'Important updates to the Spring 2025 academic calendar. Classes begin January 15th, 2025.'
  },
  {
    id: 4,
    title: 'Campus Holiday Notice - Thanksgiving',
    category: 'Holiday',
    date: 'Nov 20, 2024',
    isPinned: false,
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600',
    excerpt: 'Campus will be closed for Thanksgiving holidays from November 28th to December 1st.'
  },
  {
    id: 5,
    title: 'Scholarship Applications Now Open',
    category: 'Admission',
    date: 'Nov 18, 2024',
    isPinned: false,
    image: 'https://images.unsplash.com/photo-1600178572204-6ac8886aae63?w=600',
    excerpt: 'Merit-based scholarship applications for Spring 2025 are now open. Deadline: December 15th.'
  },
  {
    id: 6,
    title: 'Student Feedback Survey Results',
    category: 'General',
    date: 'Nov 15, 2024',
    isPinned: false,
    image: 'https://images.unsplash.com/photo-1719342399567-4b31027198b6?w=600',
    excerpt: 'Thank you for participating in our student feedback survey. View the results and planned improvements.'
  },
  {
    id: 7,
    title: 'Library Hours Extended During Exams',
    category: 'Facilities',
    date: 'Nov 12, 2024',
    isPinned: false,
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600',
    excerpt: 'The university library will extend operating hours during the examination period for student convenience.'
  },
  {
    id: 8,
    title: 'Research Symposium Registration',
    category: 'Events',
    date: 'Nov 10, 2024',
    isPinned: false,
    image: 'https://images.unsplash.com/photo-1762438135827-428acc0e8941?w=600',
    excerpt: 'Register now for the Annual Student Research Symposium. Present your research and win prizes!'
  },
  {
    id: 9,
    title: 'COVID-19 Safety Guidelines Update',
    category: 'Health',
    date: 'Nov 8, 2024',
    isPinned: false,
    image: 'https://images.unsplash.com/photo-1600178572204-6ac8886aae63?w=600',
    excerpt: 'Updated campus health and safety guidelines. Masks are now optional but recommended in crowded areas.'
  },
];

const categories = ['All', 'Exams', 'General', 'Holiday', 'Admission', 'Technology', 'Events', 'Health', 'Facilities'];

export function Notices() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredNotices = notices.filter(notice => {
    const matchesSearch = notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         notice.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || notice.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const pinnedNotices = filteredNotices.filter(n => n.isPinned);
  const regularNotices = filteredNotices.filter(n => !n.isPinned);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Exams': 'bg-red-100 text-red-700 dark:bg-red-950/30 dark:text-red-400',
      'General': 'bg-blue-100 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400',
      'Holiday': 'bg-purple-100 text-purple-700 dark:bg-purple-950/30 dark:text-purple-400',
      'Admission': 'bg-green-100 text-green-700 dark:bg-green-950/30 dark:text-green-400',
      'Technology': 'bg-cyan-100 text-cyan-700 dark:bg-cyan-950/30 dark:text-cyan-400',
      'Events': 'bg-orange-100 text-orange-700 dark:bg-orange-950/30 dark:text-orange-400',
      'Health': 'bg-pink-100 text-pink-700 dark:bg-pink-950/30 dark:text-pink-400',
      'Facilities': 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950/30 dark:text-indigo-400',
    };
    return colors[category] || 'bg-gray-100 text-gray-700 dark:bg-gray-950/30 dark:text-gray-400';
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#1E293B]">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Header */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-center gap-2 mb-2">
            <Bell className="w-8 h-8 text-[#10B981]" />
            <h1 className="text-3xl">University Notices</h1>
          </div>
          <p className="text-muted-foreground">Stay updated with the latest announcements and news</p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search notices..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12"
            />
          </div>
          
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-48 h-12">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Pinned Notices */}
        {pinnedNotices.length > 0 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="flex items-center gap-2">
              <Pin className="w-5 h-5 text-[#10B981]" />
              <h2 className="text-xl">Pinned Notices</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {pinnedNotices.map((notice) => (
                <Card 
                  key={notice.id}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group border-2 border-[#10B981]"
                >
                  <div className="aspect-video overflow-hidden bg-gray-200 dark:bg-gray-800">
                    <img 
                      src={notice.image} 
                      alt={notice.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <Badge className={getCategoryColor(notice.category)}>
                        {notice.category}
                      </Badge>
                      <Pin className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                    </div>
                    
                    <h3 className="text-lg group-hover:text-[#10B981] transition-colors">
                      {notice.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {notice.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-2 border-t">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {notice.date}
                      </div>
                      <Button variant="ghost" size="sm" className="text-[#10B981]">
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Regular Notices - Masonry Grid */}
        <div className="space-y-4 animate-in fade-in duration-700">
          <h2 className="text-xl">All Notices</h2>
          
          {regularNotices.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <Bell className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground">No notices found matching your criteria</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularNotices.map((notice, index) => (
                <Card 
                  key={notice.id}
                  className={`overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group ${
                    index % 5 === 0 ? 'md:col-span-2' : ''
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  <div className={`${index % 5 === 0 ? 'aspect-[21/9]' : 'aspect-video'} overflow-hidden bg-gray-200 dark:bg-gray-800`}>
                    <img 
                      src={notice.image} 
                      alt={notice.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-5 space-y-3">
                    <Badge className={getCategoryColor(notice.category)}>
                      {notice.category}
                    </Badge>
                    
                    <h3 className="group-hover:text-[#10B981] transition-colors">
                      {notice.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {notice.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-2 border-t">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {notice.date}
                      </div>
                      <Button variant="ghost" size="sm" className="text-[#10B981]">
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
