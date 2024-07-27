import { v4 as uuid } from 'uuid';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import relativeTime from 'dayjs/plugin/relativeTime';
import ko from 'dayjs/locale/ko';
import { toast } from 'react-toastify';
import { DateInfo } from '@/src/entities';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);
dayjs.tz.setDefault('Asia/Seoul');
dayjs.locale(ko);

type ToastProps = {
  text: string;
  type: ('info' | 'error' | 'success' | 'warning');
};

export class Nihil {
  static uuid() {
    return uuid();
  }

  static string(data: any) {
    return JSON.stringify(data);
  }

  static parse<T>(stringData: string): T {
    return JSON.parse(stringData);
  }

  static date(date?: (string | number | Date)) {
    return dayjs(date || new Date()).tz('Asia/Seoul');
  }

  static dateToFormat(date?: (string | number | Date)) {
    return this.date(date).format('YYYY년 MM월 DD일');
  }

  static dateToTimeFormat(date?: (string | number | Date)) {
    return this.date(date).format('YYYY년 MM월 DD일 HH:mm');
  }

  static indexReplacer<T>(array: Array<T>, index1: number, index2: number) {
    const newArray = [ ...array, ];

    [ newArray[index1], newArray[index2], ] = [ array[index2], array[index1], ];

    return newArray;
  }

  static toast({ type, text, }: ToastProps) {
    return toast(text, {
      type,
    });
  }

  static arraySlice<T>(array: T[], number: number) {
    const result: T[][] = [];

    for (let i = 0; i < array.length; i += number) {
      result.push(array.slice(i, i + number));
    }

    return result;
  }

  static getDateInfo(date?: (string | number | Date)): DateInfo {
    const year = this.date(date).get('year').toString();
    let month = this.date(date).get('month').toString();
    month = (+month + 1) < 10 ? `0${+month + 1}` : `${+month + 1}`;

    let nowDate = this.date(date).get('date').toString();
    nowDate = +nowDate < 10 ? `0${nowDate}` : nowDate;

    const day = this.date(date).get('day');

    const endDate = this
      .date(new Date(+year, +month, 0))
      .get('date').toString();

    const dayToString = {
      0: '일요일',
      1: '월요일',
      2: '화요일',
      3: '수요일',
      4: '목요일',
      5: '금요일',
      6: '토요일',
    };

    let hour = this.date(date).get('hour').toString();
    hour = +hour < 10 ? `0${hour}` : hour;

    let minute = this.date(date).get('minute').toString();
    minute = +minute < 10 ? `0${minute}` : minute;

    let prevMonth = this.date(date)
      .add(-1, 'month')
      .get('month').toString();
    prevMonth = (+prevMonth + 1) < 10 ? `0${+prevMonth + 1}` : `${+prevMonth + 1}`;

    let nextMonth = this.date(date)
      .add(1, 'month')
      .get('month').toString();
    nextMonth = (+nextMonth + 1) < 10 ? `0${+nextMonth + 1}` : `${+nextMonth + 1}`;

    let prevYear: string;
    let nextYear: string;

    if (month === '12') {
      prevYear = year;
      nextYear = (+year + 1).toString();
    } else if (month === '01') {
      prevYear = (+year - 1).toString();
      nextYear = year;
    } else {
      prevYear = year;
      nextYear = year;
    }

    return {
      year,
      prevYear,
      nextYear,
      month,
      prevMonth,
      nextMonth,
      date: nowDate,
      day,
      dayString: dayToString[day],
      hour,
      minute,
      endDate,
    };
  }
}
