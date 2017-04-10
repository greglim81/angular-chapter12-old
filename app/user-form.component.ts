import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFire } from 'angularfire2';

import { User } from './user';

@Component({
    selector:'user-form',
    templateUrl: 'user-form.component.html'
})
export class UserFormComponent  {    
    id;
    form: FormGroup;  
    title: string;
    user = new User();
    item;     

    constructor(fb: FormBuilder, private _router:Router, private _route:ActivatedRoute, private af:AngularFire){        
        this.form = fb.group({
            username:['',Validators.required ],
            email:['',Validators.required]            
        })        
    }

    ngOnInit(){
        this._route.params.subscribe(params => {
            this.id = params["id"];            
        });
                
                
        if(!this.id){
            this.title = "New User";            
        }
        else{
            this.title = "Edit User";            
            this.item = this.af.database.object(this.id);         
        }  

                                   
    }    

    submit(){                        
        if (this.id) {                       
            this.af.database.object(this.id).update({
                name: this.user.username,	
                email: this.user.email  
            });                                  
        }
        else{            
            this.af.database.list('/').push({
                name: this.user.username,	
                email: this.user.email  
            });                         
        }
                                    
        this._router.navigate(['']);
    }  
}