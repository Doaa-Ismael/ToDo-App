import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ListsService } from './lists.service';
import { DoneComponent } from './done/done.component';
import { ToDoComponent } from './to-do/to-do.component';

const routList: Routes = [ 
    {path: "", component: ToDoComponent},
    {path: "done", component: DoneComponent}
  ];


@NgModule({
  declarations: [
    AppComponent,
    DoneComponent,
    ToDoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    RouterModule.forRoot(routList)
  ],
  providers: [ListsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
