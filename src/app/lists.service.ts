import { Injectable } from '@angular/core';

@Injectable()
export class ListsService {

	toDoList:string [] =  ['Html', 'Css', 'Javascript', 'Bootstrap', 'Angular5'];
	doneList:string [] = [];

  constructor() { }

}
