import './styles.scss';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FsExampleModule } from '@firestitch/example';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FsComponentModule } from '../src';
import { AppMaterialModule } from './app/material.module';
import { AppComponent } from './app/app.component';
import { SingleLineComponent } from './app/components';
import { SingleLineHintComponent } from './app/components';
import { SingleLineIconComponent } from './app/components';
import { SingleLineDisabledComponent } from './app/components';
import { SingleLineDebounceComponent } from './app/components';
import { SingleLineMaxLengthComponent } from './app/components';
import { SingleLineBlurComponent } from './app/components';
import { SingleLinePreSuffixComponent } from './app/components';
import { MultilineComponent } from './app/components';



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
    SingleLineComponent,
    SingleLineHintComponent,
    SingleLineIconComponent,
    SingleLineDisabledComponent,
    SingleLineDebounceComponent,
    SingleLineMaxLengthComponent,
    SingleLineBlurComponent,
    MultilineComponent,
    SingleLinePreSuffixComponent
  ],
  providers: [
  ],
})
export class PlaygroundModule {
}
