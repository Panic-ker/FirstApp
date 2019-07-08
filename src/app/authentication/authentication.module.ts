import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationComponent } from './authentication.component';

@NgModule({
  declarations: [AuthenticationComponent,LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],

  exports:[AuthenticationComponent]
})
export class AuthenticationModule { }
