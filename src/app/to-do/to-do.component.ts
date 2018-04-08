import { Component, OnInit } from '@angular/core';
import { ListsService } from '../lists.service';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {


	
  	toDoList: string[];
  	doneList: string[];
  	adding = false;
  	newItem = null;

  constructor(private listsService: ListsService) { 

  		this.toDoList = listsService.toDoList;
   		this.doneList = listsService.doneList;

  }

   add() {
   		this.adding=true;

   }
   saveItem() {

   	this.toDoList.push(this.newItem);
   	this.newItem = null;
   	this.adding = false;
   }
   removeItem(item) {

   	const index = this.toDoList.indexOf(item);
    
    if (index !== -1) {
        this.toDoList.splice(index, 1);
    }
    this.doneList.push(item);

console.log(this.doneList);
   }

  ngOnInit() {
  }

}
