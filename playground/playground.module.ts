import './../tools/assets/playground.scss';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FsExampleModule } from '@firestitch/example';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FsComponentModule } from '../src';
import { AppMaterialModule } from './app/material.module';
import { AppComponent } from './app/app.component';
import { FirstExampleComponent } from './app/components';

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    FsComponentModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    FsExampleModule,
  ],
  entryComponents: [
  ],
  declarations: [
    AppComponent,
    FirstExampleComponent
  ],
  providers: [
  ],
})
export class PlaygroundModule {
}
