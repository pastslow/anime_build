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
      name:"Sasuke is comming.",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Officiis fugit sed cum!`,
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
