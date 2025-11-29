# Green Guardian 🛡️

**AI-Powered Fair Examination System**

A modern, comprehensive university examination monitoring and automation web platform with beautiful UI/UX design.

## 🎨 Design Features

- **Clean & Minimalistic**: Professional academic interface with plenty of white space
- **Green Accent Theme**: Fresh green (#10B981, #22C55E) as primary color palette
- **Dark Mode Support**: Seamless light/dark mode switching with dark blue-gray (#1E293B) base
- **Responsive Design**: Fully responsive across Desktop (1440px), Tablet, and Mobile devices
- **Inter Font**: Modern, clean Google Font typography
- **Micro-animations**: Smooth transitions and hover effects throughout
- **Interactive Charts**: Beautiful, colorful analytics using Recharts

## 📱 Pages & Components

### 1. **Role-Based Login Page** ✨ NEW
- Dropdown selector: Student 👨‍🎓 / Teacher 👩‍🏫
- Conditional fields (Student ID or Teacher ID + Password)
- Login attempt counter (3 attempts)
- University logo and branding
- Demo credentials for both roles

### 2. **Student Dashboard**
- Welcome section with personalized greeting
- Next exam countdown with large digital timer
- 4 statistics cards (Total Exams, Avg Marks, Behavior Score, Plagiarism Risk)
- Performance Analytics section with 4 interactive charts:
  - Marks trend line chart
  - AI Behavior Score history
  - Exam distribution donut chart
  - Class rank comparison bar chart
- Recent notices carousel with images
- Current behavior score widget

### 3. **Exam List Page**
- Tabbed interface: Upcoming, Live, Completed exams
- Live exam cards with pulsing "LIVE NOW" badge
- Countdown timers for each upcoming exam
- Detailed exam information (duration, marks, type)
- Score summaries for completed exams

### 4. **Exam Room (Full Screen)**
- Top bar with exam name and countdown timer
- Left panel: Question paper display
- Right panel: 
  - Webcam feed simulation with green active border
  - "AI Monitoring Active" indicator
  - Current behavior score display
  - Activity log with alerts
- Tab-switch detection with warnings
- PDF answer upload dropzone
- Large "Submit Exam" button

### 5. **Exam History & Similarity Report**
- Summary cards (Average Score, Avg Behavior, Total Exams)
- Performance trend line chart
- Expandable exam cards with:
  - Score, behavior, and similarity metrics
  - Detailed similarity breakdown (pie chart)
  - Question statistics
  - Class rank comparison
  - Color-coded originality badges

### 6. **Admin Dashboard**
- Live exam monitoring table
- Real-time student activity tracking
- Behavior scores and tab-switch monitoring
- Suspicious activity alerts
- Auto-marking queue with AI scores
- Approve/Edit marks functionality

### 7. **Student Profile Page** ✨ NEW
- Large avatar with upload on hover
- Complete student information (Name, ID, Department, Batch, Semester, Email, Phone)
- Academic stats cards (GPA, Credits, Attendance, Class Rank)
- Performance charts (Recent Exam Scores, Attendance Trend)
- Color-coded information sections
- Edit profile functionality

### 8. **University Notices Page**
- Search and category filter
- Pinned notices section
- Masonry grid layout for notices
- Color-coded category badges
- Notice images and excerpts
- Responsive card design

---

## 👩‍🏫 Teacher/Admin Portal (NEW SECTION)

### 9. **Teacher Dashboard with Dark Sidebar** ✨ NEW
- **Dark Left Sidebar** (#1E293B) with navigation:
  - Dashboard, Create Exam, All Exams, Live Monitoring
  - Students, Marking Queue, Notices, Reports
- Teacher profile section with avatar
- 4 statistics cards (Total Students, Active Exams, Monthly Exams, Avg Performance)
- Quick action buttons (Create Exam, Live Monitoring, Review Submissions, Reports)
- Recent exams list with status badges (Live, Completed, Scheduled)
- Analytics charts:
  - Exam statistics (completed vs ongoing)
  - Student performance distribution
  - Behavior analysis pie chart
  - Alerts & notifications panel
- Theme toggle in sidebar

### 10. **Live Exam Monitoring Room** ✨ NEW
- Grid view of all active students (4 columns responsive)
- Each student card shows:
  - Live webcam thumbnail simulation
  - Real-time behavior score ring (0-100)
  - Tab switch counter with badges
  - Face detection status
  - Time elapsed
  - **FLAG badge** for suspicious students
  - "View Details" button
- Summary cards: Active Students, Flagged Count, Avg Behavior, Time Remaining
- Search and filter functionality
- Detail modal with:
  - Larger webcam view
  - Detailed behavior score
  - Activity log timeline
  - **"Force End Exam"** button
  - Add to review queue option

### 11. **Create/Schedule Exam Page** ✨ NEW
- Comprehensive exam creation form:
  - Exam title, subject dropdown
  - Date picker & time selector
  - Duration and total marks
  - Instructions textarea
- **AI Monitoring Settings** card:
  - Face Detection toggle
  - Tab Switch Detection toggle
  - Auto Plagiarism Check toggle
- Action buttons: "Create & Schedule" / "Save as Draft"
- **Scheduled Exams Table** with:
  - Exam details, date/time, duration
  - Student count
  - Status badges (Scheduled, Draft)
  - Actions: View, Edit, Delete

### 12. **AI Marking & Plagiarism Queue** ✨ NEW
- Statistics dashboard (Total Queue, Pending, Flagged, Approved)
- Search and status filter
- Submissions table showing:
  - Student info and exam name
  - AI-suggested score
  - Behavior score (color-coded)
  - Similarity badge (green/yellow/red)
  - Status badges (Pending, Flagged, Reviewed, Approved)
  - Quick actions: View, Approve, Reject
- **Detailed Review Modal**:
  - Score summary cards
  - Plagiarism pie chart breakdown
  - Source similarity percentages
  - Manual score override input
  - Download answer sheet
  - Approve & Publish / Reject buttons

## 🎯 Key Components

### **Digital Timer**
- Large, bold countdown display
- Color changes (Green → Red when < 5 min)
- Days, Hours, Minutes, Seconds format
- Warning threshold support

### **Behavior Score Widget**
- Circular progress indicator (0-100)
- Color-coded by score level:
  - Green (80+): Excellent
  - Yellow (60-79): Good
  - Orange (40-59): Fair
  - Red (<40): Poor

### **Similarity Badge**
- Green badge (<30%): Low similarity, excellent originality
- Yellow badge (30-69%): Moderate similarity
- Red badge (≥70%): High similarity, requires review
- Icon indicators for each level

## 🚀 Technologies Used

- **React** with TypeScript
- **React Router** for navigation
- **Tailwind CSS** for styling
- **Recharts** for data visualization
- **Lucide React** for icons
- **Shadcn/ui** component library
- **Google Fonts (Inter)** for typography

## 🎭 Theme Colors

### Light Mode
- Background: #FFFFFF
- Primary: #10B981 (Green)
- Secondary: #22C55E (Emerald)
- Text: Dark Gray

### Dark Mode
- Background: #1E293B (Dark Blue-Gray)
- Card: #334155
- Primary: #10B981 (Green - stays consistent)
- Text: Light Gray/White

## 🔐 Demo Credentials

**Student Login:**
- Login as: Student 👨‍🎓
- Student ID: `STU2024`
- Password: `demo123`

**Teacher Login:** ✨ NEW
- Login as: Teacher 👩‍🏫
- Teacher ID: `TCH2024`
- Password: `admin123`

## 📊 Features

### Student Features
- ✅ Real-time exam monitoring
- ✅ AI-powered behavior tracking
- ✅ Plagiarism detection & similarity analysis
- ✅ Automatic tab-switch detection
- ✅ Digital countdown timers
- ✅ Performance analytics & charts
- ✅ Student profile with academic stats
- ✅ Exam history with detailed reports
- ✅ Dark/Light mode toggle
- ✅ Responsive mobile design
- ✅ Notice board system

### Teacher Features ✨ NEW
- ✅ **Dark sidebar navigation** with full teacher portal
- ✅ **Role-based login** (Student/Teacher selector)
- ✅ **Live monitoring room** with student grid
- ✅ **Webcam feed simulation** for each student
- ✅ **Real-time behavior scores** and alerts
- ✅ **Flag suspicious students** functionality
- ✅ **Force end exam** capability
- ✅ **Create and schedule exams** with AI settings
- ✅ **AI auto-marking queue** review system
- ✅ **Plagiarism analysis** with pie charts
- ✅ **Manual score override** option
- ✅ **Approve/Reject submissions** workflow
- ✅ Teacher dashboard with analytics
- ✅ Student performance distribution charts
- ✅ Exam statistics and trends

## 🔄 Routing & Prototypes

### Student Flow
1. Login (Student) → Dashboard → Profile/Exams → Exam Room → History

### Teacher Flow ✨ NEW
1. Login (Teacher) → Teacher Dashboard → Create Exam → Live Monitoring
2. Teacher Dashboard → Marking Queue → Review Submission → Approve/Reject
3. Live Monitoring → Student Detail → Force End / Flag Student

## 🎨 Design Principles

1. **Trust & Security**: Green (#22C55E) color palette conveys safety and fairness
2. **Clarity**: Clean layouts with clear information hierarchy
3. **Accessibility**: High contrast, readable fonts, clear CTAs
4. **Feedback**: Immediate visual feedback for all interactions
5. **Professional**: Academic aesthetic suitable for universities
6. **Unified Design**: Same card shadows, fonts (Inter/Poppins), spacing across all pages
7. **Dark Sidebar**: Teacher portal uses dark (#1E293B) sidebar for professional look
8. **Role Separation**: Clear visual distinction between student and teacher interfaces

## 🌟 Highlights

- **Beautiful Charts**: Interactive, colorful data visualizations
- **Smooth Animations**: Micro-interactions and transitions
- **Modern UI**: Card-based layouts with shadows and hover effects
- **Intuitive Navigation**: Clear routing and navigation patterns
- **Comprehensive Coverage**: All stakeholder needs addressed (students, teachers, admins)

---

**Built with ❤️ for fair and transparent examinations**

© 2024 Green Guardian. All rights reserved.
