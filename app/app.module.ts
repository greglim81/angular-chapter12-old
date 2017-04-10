import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { UserComponent } from './user.component';
import { UserFormComponent } from './user-form.component';

import { routing } from './app.routing';

export const firebaseConfig = {
  apiKey: "AIzaSyC94rD8wXG0aRLTcG29qVGw8CFfvCK7XVQ",
  authDomain: "myfirstfirebaseproject-6da6c.firebaseapp.com",
  databaseURL: "https://myfirstfirebaseproject-6da6c.firebaseio.com",
  storageBucket: "myfirstfirebaseproject-6da6c.appspot.com",
  messagingSenderId: "138019512918"
};

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserFormComponent,    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
