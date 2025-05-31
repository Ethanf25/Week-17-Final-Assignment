import React from 'react';
import '../App.css';

// Show a colored badge based on status
interface StatusBadgeProps {
  status: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  let className = 'status-badge ';

  if (status === 'Playing') className += 'status-playing';
  else if (status === 'Completed') className += 'status-completed';
  else if (status === 'Dropped') className += 'status-dropped';
  else className += 'status-unknown';

  return <span className={className}>{status}</span>;
};

export default StatusBadge;
