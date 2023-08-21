import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColorsDirective } from './colors.directive';
import { personPipe } from './person-pipe';
import { boxDirective } from './box-directive';
import { buttonDirective } from './button-directive';
import { usersPipe } from './users-pipe';

@NgModule({
  declarations: [
    AppComponent,
    ColorsDirective,
    personPipe,
    boxDirective,
    buttonDirective,
    usersPipe,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
