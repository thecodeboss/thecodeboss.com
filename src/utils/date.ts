const MILLISECONDS_IN_DAY = 1000 * 60 * 60 * 24;

export const formatDate = (date: Date) => {
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
};

export const formatDuration = (start: Date, end: Date = new Date()) => {
  const days = (end.getTime() - start.getTime()) / MILLISECONDS_IN_DAY;
  const years = Math.floor(days / 365);
  const months = Math.round((days % 365) / 30);
  if (years > 0) {
    if (months > 0) {
      return `${years} yrs ${months} mo`;
    }
    return `${years} yrs`;
  }
  return `${months} mo`;
};
