import { AlertCircle, CheckCircle, AlertTriangle } from 'lucide-react';

interface SimilarityBadgeProps {
  percentage: number;
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
}

export function SimilarityBadge({ percentage, size = 'md', showIcon = true }: SimilarityBadgeProps) {
  const getStyle = () => {
    if (percentage < 30) {
      return {
        bg: 'bg-green-50 dark:bg-green-950/30',
        text: 'text-green-700 dark:text-green-400',
        border: 'border-green-200 dark:border-green-800',
        icon: CheckCircle
      };
    }
    if (percentage < 70) {
      return {
        bg: 'bg-yellow-50 dark:bg-yellow-950/30',
        text: 'text-yellow-700 dark:text-yellow-400',
        border: 'border-yellow-200 dark:border-yellow-800',
        icon: AlertTriangle
      };
    }
    return {
      bg: 'bg-red-50 dark:bg-red-950/30',
      text: 'text-red-700 dark:text-red-400',
      border: 'border-red-200 dark:border-red-800',
      icon: AlertCircle
    };
  };

  const style = getStyle();
  const Icon = style.icon;

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  const iconSizes = {
    sm: 14,
    md: 16,
    lg: 18
  };

  return (
    <div className={`inline-flex items-center gap-1.5 rounded-full ${style.bg} ${style.text} border ${style.border} ${sizeClasses[size]}`}>
      {showIcon && <Icon size={iconSizes[size]} />}
      <span className="font-mono">{percentage}%</span>
      <span>Similarity</span>
    </div>
  );
}
