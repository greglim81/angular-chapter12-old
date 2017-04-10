import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'users',
  templateUrl: './user.component.html'  
})
export class UserComponent {
    users;

    constructor(private af:AngularFire, private _router: Router){    
    }

    ngOnInit(){
      this.users = this.af.database.list('/');
    }

    add(){
      this._router.navigate(['add']);
    }

    delete(user){  
      if (confirm("Are you sure you want to delete " + user.name + "?")) {
        this.af.database.object(user.$key).remove()
          .then( x=> console.log("SUCCESS"))
          .catch( error => {
            alert("Could not delete the user.");
            console.log("ERROR", error)
          });
      }                  
    }

    edit(user){      
      this._router.navigate(['add/']);                  
    }   
}