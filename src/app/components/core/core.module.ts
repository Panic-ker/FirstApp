import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from '../todos/todos.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { HeaderComponent } from '../header/header.component';
import { TodoItemsComponent } from '../todos/todoComponents/todo-items/todo-items.component';
import { AddTodoComponent } from '../todos/todoComponents/add-todo/add-todo.component';
import { LogoutComponent } from '../logout/logout.component';
import { CoreComponent } from './core.component';
import { CoreRoutingModule } from './core-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TodosComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    TodoItemsComponent,
    AddTodoComponent,
    LogoutComponent,
    CoreComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    CoreRoutingModule,
    HttpClientModule,
    FormsModule

  ],

  exports: [CoreComponent]
})
export class CoreModule { }
