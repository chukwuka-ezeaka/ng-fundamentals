import { Component, Input,} from '@angular/core';


@Component({
    selector: 'event-thumbnail',
    template: `    
        <div class="well hoverwell thumbnail">
            <h2>{{event?.name}}</h2>
            <div [ngClass]="getStartTime()" [ngSwitch]="event?.time">
                Time: {{event?.time}}
                <span *ngSwitchCase="'8:00 am'">( early start )</span>
                <span *ngSwitchCase="'10:00 am'">( late start )</span>
                <span *ngSwitchDefault>( normal start )</span>
            </div>
            <div>Date: {{event?.date}}</div>
            <div>Price: \${{event?.price}}</div>
            <div *ngIf="event?.location">
                <span>Location: {{event?.location?.address}}</span>
                <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
            </div>
            <div *ngIf="event?.onlineUrl">
                Online Url: {{event?.onlineUrl}}
            </div>
        </div>
    `,
    styles:[`
        .bold: { font-weight: 600 }
        .green { color: green !important }
        .thumbnail { min-height: 210px}
        .pad-left { margin-left: 5px; }
    `]
})

export class EventThumbnailComponent {
    @Input() event:any
    getStartTime() {
        if(this.event && this.event.time === '8:00 am'){
        return ['green', 'bold']
        }
        return []
    }
}
