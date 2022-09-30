import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountService } from './account.service';
import { LoggingServeice } from './logging.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],

//--> You can define the service in all levels of your app from 'app.module'
//    to a child component   but remember that all of the child components
//    use that instance provided in parent and do not need to add a child 
//    component, decorator 'providers:[ ]'
  providers: [LoggingServeice,AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
