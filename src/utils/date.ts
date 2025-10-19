import { format, isToday, isYesterday, formatDistanceToNow } from "date-fns";

export function formatTimestamp(date: Date): string {
  if (isToday(date)) {
    const secondsAgo = (new Date().getTime() - date.getTime()) / 1000;
    if (secondsAgo < 60) {
      return "Just now";
    }
    // For older than 1 minute but less than an hour, formatDistanceToNow is good
    // e.g., "5 minutes ago"
    if (secondsAgo < 3600) {
      return formatDistanceToNow(date, { addSuffix: true });
    }
    // Otherwise, show "Today, H:MM AM/PM"
    return `Today, ${format(date, "p")}`; // 'p' is short for time, e.g., 11:59 AM
  }

  if (isYesterday(date)) {
    return `Yesterday, ${format(date, "p")}`;
  }

  // For anything older, show the relative time like "12 hours ago", "2 days ago" etc.
  return formatDistanceToNow(date, { addSuffix: true });
}
