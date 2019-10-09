import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr/>
        <event-thumbnail #thumbnail [event]="event1"></event-thumbnail>
    </div>
    ` 
})
export class EventsListComponent{
    event1 = {
        name: "Angular Connect",
        id: 1,
        date: "22-01-2019",
        price: "5.00",
        location: {
            address: "options hub",
            city: "Jos",
            country: "Nigeria"
        }
    }
}