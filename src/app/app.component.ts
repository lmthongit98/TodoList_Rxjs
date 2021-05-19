import { Component, ElementRef, ViewChild } from '@angular/core';
import { TodosStoreService } from './services/todos-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('todoTitleInput') todoTitleInput!: ElementRef;

  title = 'todo-list-rxjs';

  constructor(public todosStore: TodosStoreService) {}


  onAddTodo(title: string){
    this.todosStore.addTodo(title);
    this.todoTitleInput.nativeElement.value = '';
  }
}
