export type ApiResponse<T> = {
  data: T;
  message: string;
}

export type ApiError = {
  data: null;
  message: string;
}

export interface ISiteMeta {
  title: string;
  url?: string;
  description?: string;
  author?: string;
  keywords?: string;
  type?: string;
  tags?: string;
  section?: string;
  created?: string;
  updated?: string;
  image?: string;
}

export interface IConfigData {
  title: string;
  description: string;
  url: string;
  type: string;
  image: string;
  keywords: string;
  author: {
    name: string;
    url: string;
  };
  version: string;
}

export interface DateInfo {
  year: string;
  nextYear: string;
  prevYear: string;
  month: string;
  nextMonth: string;
  prevMonth: string;
  date: string;
  day: number;
  dayString: string;
  hour: string;
  minute: string;
  endDate: string;
}

export interface CalendarMonthData {
  date: string;
  fullDate: string;
  isActive: boolean,
}

export interface CalendarTimeData {
  value: string;
  label: string;
}

export interface CalendarTime {
  hours: CalendarTimeData[];
  minutes: CalendarTimeData[];
}

export interface MonthData {
  nowDate: string;
  nowTime: string;
  now: string;
  prev: string;
  next: string;
}
