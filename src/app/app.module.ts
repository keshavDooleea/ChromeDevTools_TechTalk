import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfilingComponent } from '../components/profiling/profiling.component';
import { SpinnerComponent } from '../components/spinner/spinner.component';
import { MonitoringEventsComponent } from '../components/monitoring-events/monitoring-events.component';
import { SnapScrollComponent } from '../components/snap-scroll/snap-scroll.component';
import { IntroComponent } from '../components/intro/intro.component';
import { CssComponent } from '../components/css/css.component';

@NgModule({
  declarations: [AppComponent, ProfilingComponent, SpinnerComponent, MonitoringEventsComponent, SnapScrollComponent, IntroComponent, CssComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
