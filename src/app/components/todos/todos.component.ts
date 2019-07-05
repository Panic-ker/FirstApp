import { Component, OnInit } from '@angular/core';
import {Todo} from '../../model/Todo';
import { TodoService } from 'src/app/services/todo.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];

  constructor(private todoservive:TodoService) { }

  //initialsing the todos
  ngOnInit() {
    console.log("init in component 1");
    this.todoservive.getTodos().subscribe(todos=>
      this.todos=todos)
  }


  
  //deleting todos
  delTodo(todo:Todo){
    console.log("deleting todo"+todo);
  //delete from UI
    this.todos=this.todos.filter(t=>t.id!==todo.id);
  //Delete from server
    this.todoservive.deleteTodo(todo).subscribe();
  }


  //adding a todo
  addTodo(todo:Todo){
   this.todoservive.addTodo(todo).subscribe(todo=>this.todos.push(todo))
  }

}
