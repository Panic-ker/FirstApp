import { Injectable } from '@angular/core';
import {Todo}  from '../model/Todo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


// http headers
const httpOptions={
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})




export class TodoService {

  // contructor 
  constructor(private http:HttpClient) { }

  // creating the URL to access
  todosUrl: string = 'http://localhost:3000/data';
  todosLimit: string = "?_limit=5";

  // function to get todos
  getTodos():Observable<Todo[]>{
    console.log("service get ");
        return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);


  }

  // toggle todo status
  toggleCompleted(todo:Todo):Observable<any>{
    const url=`${this.todosUrl}${todo.id}`;
    return this.http.put(url,todo,httpOptions);
  }

  //delete todos
  deleteTodo(todo:Todo):Observable<Todo>{    
    const url=`${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url,httpOptions);
  }

  //add todo
  addTodo(todo:Todo):Observable<Todo>{
    return this.http.post<Todo>(this.todosUrl,todo,httpOptions);
  }

}
