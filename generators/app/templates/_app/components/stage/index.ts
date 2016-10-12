import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { StateComponent } from './app';

@NgModule({
	imports: [
    BrowserModule
  ],
	declarations:[
		StateComponent
	],
	bootstrap: [ StateComponent ]
})
export class StageModule { }
