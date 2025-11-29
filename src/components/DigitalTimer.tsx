import { useEffect, useState } from 'react';

interface DigitalTimerProps {
  targetDate: Date;
  size?: 'sm' | 'md' | 'lg';
  showLabels?: boolean;
  warningThreshold?: number;
  onComplete?: () => void;
}

export function DigitalTimer({ 
  targetDate, 
  size = 'md', 
  showLabels = true,
  warningThreshold = 300,
  onComplete
}: DigitalTimerProps) {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const total = targetDate.getTime() - new Date().getTime();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return { total, days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = getTimeRemaining();
      setTimeLeft(remaining);
      
      if (remaining.total <= 0) {
        clearInterval(timer);
        onComplete?.();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  const isWarning = timeLeft.total > 0 && timeLeft.total <= warningThreshold * 1000;
  const isExpired = timeLeft.total <= 0;

  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-4xl',
    lg: 'text-6xl'
  };

  const labelSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  const getDisplayValue = (value: number) => {
    return value < 0 ? 0 : value;
  };

  return (
    <div className="flex items-center justify-center gap-2">
      {timeLeft.days > 0 && (
        <>
          <div className="flex flex-col items-center">
            <div className={`${sizeClasses[size]} font-mono tabular-nums ${isWarning ? 'text-red-500' : isExpired ? 'text-gray-400' : 'text-[#10B981]'} transition-colors duration-300`}>
              {String(getDisplayValue(timeLeft.days)).padStart(2, '0')}
            </div>
            {showLabels && <span className={`${labelSizeClasses[size]} text-muted-foreground mt-1`}>Days</span>}
          </div>
          <span className={`${sizeClasses[size]} font-mono ${isWarning ? 'text-red-500' : 'text-[#10B981]'}`}>:</span>
        </>
      )}
      
      <div className="flex flex-col items-center">
        <div className={`${sizeClasses[size]} font-mono tabular-nums ${isWarning ? 'text-red-500' : isExpired ? 'text-gray-400' : 'text-[#10B981]'} transition-colors duration-300`}>
          {String(getDisplayValue(timeLeft.hours)).padStart(2, '0')}
        </div>
        {showLabels && <span className={`${labelSizeClasses[size]} text-muted-foreground mt-1`}>Hours</span>}
      </div>
      
      <span className={`${sizeClasses[size]} font-mono ${isWarning ? 'text-red-500' : 'text-[#10B981]'}`}>:</span>
      
      <div className="flex flex-col items-center">
        <div className={`${sizeClasses[size]} font-mono tabular-nums ${isWarning ? 'text-red-500' : isExpired ? 'text-gray-400' : 'text-[#10B981]'} transition-colors duration-300`}>
          {String(getDisplayValue(timeLeft.minutes)).padStart(2, '0')}
        </div>
        {showLabels && <span className={`${labelSizeClasses[size]} text-muted-foreground mt-1`}>Mins</span>}
      </div>
      
      <span className={`${sizeClasses[size]} font-mono ${isWarning ? 'text-red-500' : 'text-[#10B981]'}`}>:</span>
      
      <div className="flex flex-col items-center">
        <div className={`${sizeClasses[size]} font-mono tabular-nums ${isWarning ? 'text-red-500' : isExpired ? 'text-gray-400' : 'text-[#10B981]'} transition-colors duration-300`}>
          {String(getDisplayValue(timeLeft.seconds)).padStart(2, '0')}
        </div>
        {showLabels && <span className={`${labelSizeClasses[size]} text-muted-foreground mt-1`}>Secs</span>}
      </div>
    </div>
  );
}
