import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfilingComponent } from '../components/profiling/profiling.component';
import { SpinnerComponent } from '../components/spinner/spinner.component';

@NgModule({
  declarations: [AppComponent, ProfilingComponent, SpinnerComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
