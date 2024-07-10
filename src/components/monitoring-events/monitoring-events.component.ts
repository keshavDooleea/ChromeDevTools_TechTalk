import { Component } from '@angular/core';

@Component({
  selector: 'app-monitoring-events',
  templateUrl: './monitoring-events.component.html',
  styleUrls: ['./monitoring-events.component.css'],
})
export class MonitoringEventsComponent {
  onTestClicked(event: MouseEvent): void {
    console.log(event);
  }
}
