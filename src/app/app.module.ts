import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import{AuthGuard} from './auth.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoItemsComponent } from './components/todos/todoComponents/todo-items/todo-items.component';
import { AddTodoComponent } from './components/todos/todoComponents/add-todo/add-todo.component';
import { TodoService } from './services/todo.service';
import { LoginComponent } from './components/login/login.component';
import { from } from 'rxjs';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    TodoItemsComponent,
    AddTodoComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TodoService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
