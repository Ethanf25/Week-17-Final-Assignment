import React from 'react'; 
import '../App.css'; 

// This component displays a badge indicating the status of a game (for example; Playing, Completed, Dropped)
interface StatusBadgeProps { // this defines props interface for the component
  status: string; // this states the status must be a string
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => { // First define functional component with status prop
  let className = 'status-badge '; // and start with base class for the badge

  if (status === 'Playing') className += 'status-playing'; // then add class if the status is "Playing"
  else if (status === 'Completed') className += 'status-completed'; //"Completed"
  else if (status === 'Dropped') className += 'status-dropped'; //"Dropped"
  else className += 'status-unknown'; //or if the status is unknown, add a default class

  return <span className={className}>{status}</span>; // lastly, return a span element with the class and status text
};

export default StatusBadge; // Export the component
