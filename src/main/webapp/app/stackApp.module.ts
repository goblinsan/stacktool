import {NgModule} from '@angular/core';
import {StackAppComponent} from './stackApp.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [StackAppComponent],
    bootstrap: [StackAppComponent]
})
export class StackAppModule {}
