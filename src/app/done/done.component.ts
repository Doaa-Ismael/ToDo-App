import { Component, OnInit } from '@angular/core';
import { ListsService } from '../lists.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {
	
	doneList: string[] ;

  constructor(private listsService: ListsService) {

		this.doneList =   listsService.doneList;
  	 }

  ngOnInit() {
  }

}
