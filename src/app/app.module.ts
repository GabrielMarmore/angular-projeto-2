import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DoneListComponent } from './done-list/done-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ListComponent },
      { path: 'done', component: DoneListComponent },
    ]),
  ],
  declarations: [AppComponent, HelloComponent, ListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
