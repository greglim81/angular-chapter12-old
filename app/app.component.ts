import { Component, OnInit } from '@angular/core';
import { AngularFire} from 'angularfire2';
import { FormControl } from '@angular/forms';
 
@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>        
  `  
})
export class AppComponent {  

  constructor(af: AngularFire){
    console.log(af);
    
  }
}


