import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Todo } from '../models/todo.models';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todo!: Todo;
  @Output() complete = new EventEmitter<boolean>();
  @Output() remove = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onChecked(e: any){
    this.complete.emit(e.target.checked);
  }

}
