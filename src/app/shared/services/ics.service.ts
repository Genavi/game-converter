import { Injectable } from '@angular/core';
import { Event } from '../services/event';

@Injectable({
  providedIn: 'root'
})
export class IcsService {
  public seasonid = "27";
  private VCALENDAR = `BEGIN:VCALENDAR
PRODID:-//https://bc-aka.ch//NONSGML iCalcreator 2.6//
VERSION:2.0
X-WR-TIMEZONE:Europe/Zurich
Content-Type: text/calendar; charset=utf-8 
`;

  constructor() { }

  createEvent(events: Event[]) {
    for (const event of events) {
      /**
       * Don't ever format this string template!!!
       */
      const EVENT = `BEGIN:VEVENT
UID:${event.uid}
LOCATION:${event.location}
SUMMARY:${event.federation}: ${event.home} - ${event.guest}
CATEGORY:${event.category}
DTSTART:${this.formatDate(event.start)}
DTEND:${this.formatDate(event.end)}
DESCRIPTION:${event.description}
END:VEVENT`
      this.VCALENDAR += `${EVENT}
`
    }
    this.VCALENDAR += `END:VCALENDAR`;
    return this.VCALENDAR;
  }

  formatDate(date: Date): string {
    if (!date) {
      return '';
    }
    // don't use date.toISOString() here, it will be always one day off (cause of the timezone)
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    const month = date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
    const year = date.getFullYear();
    const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    return `${year}${month}${day}T${hour}${minutes}${seconds}`;
  }


  download(filename: string, text: string) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.setAttribute('target', '_blank');
    element.style.display = 'none';
    element.click();
  }
}
