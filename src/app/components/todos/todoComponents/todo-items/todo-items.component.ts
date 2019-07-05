import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/model/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {

 
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo>= new EventEmitter;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  
  setClass(){
    let classes={
      todo: true,
      'is-complete':this.todo.completed
    }
    return classes;
  }

  onToggle(todo){
    // toggle in UI
    todo.completed=!todo.completed;
    console.log('toggle',todo);

    //toggle in serve
   this.todoService.toggleCompleted(todo).subscribe(todo=>
    console.log("todo Subscribed", todo))
  }

//delete funcitonality
  onDelete(todo){
    console.log('delete',todo);
    this.deleteTodo.emit(todo);
  }


}
