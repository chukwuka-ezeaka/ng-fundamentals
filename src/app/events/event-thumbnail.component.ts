import { Component, Input,} from '@angular/core';


@Component({
    selector: 'event-thumbnail',
    template: `    
        <div class="well hoverwell thumbnail">
            <h2>{{event.name}}</h2>
            <div>{{event.id}}</div>
            <div>{{event.date}}</div>
            <div>\${{event.price}}</div>
            <div>
                <span>Location: {{event.location.address}}</span>
                <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span>
            </div>
        </div>
    `,
    styles:[`
        .pad-left { margin-left: 5px; }
    `]
})

export class EventThumbnailComponent {
    @Input() event:any
  
}
