import { RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { UserFormComponent } from './user-form.component';

export const routing = RouterModule.forRoot([
    { path:'', component:UserComponent },
    { path:'add',component:UserFormComponent },
    { path:'add/:id', component: UserFormComponent }  	 
]);