import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-events',
  templateUrl: './calendar-events.component.html',
  styleUrls: ['./calendar-events.component.css']
})
export class CalendarEventsComponent implements OnInit {

  public eventNumber = 0;

  public calendarEvents = [
    {
      name:"Hello Sasuke",
      description: `Asa event :))`,
      bonus:[
        {
        bonusImg:"income",
        bonusValue:100
       },
       {
        bonusImg:"materials",
        bonusValue:10
       }
      ]
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
