import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoreComponent } from './core.component';
import { AuthGuard } from '../../auth.guard';
import { TodosComponent } from '../todos/todos.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { LogoutComponent } from '../logout/logout.component';
import { CoreModule } from './core.module';



const Childroutes: Routes = [
  {
    path: '',
    component: CoreComponent,
    canActivate: [AuthGuard],
    children:[
        {
            path:'Home',
            component:TodosComponent
        },
        {
            path:'About',
            component:AboutComponent
       },
        {
            path:'Contact',
            component:ContactComponent
       },
        {
            path:'Logout',
            component:LogoutComponent
       }
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(Childroutes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
