import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../account.service';
import { LoggingServeice } from '../logging.service';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
 // providers:[LoggingServeice]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();
constructor(private accountServie:AccountService){


this.accountServie.statusUpdated.subscribe((status:string) =>{alert("new status " +status)} )


}
  onCreateAccount(accountName: string, accountStatus: string) {
   
   this.accountServie.addAccount(accountName,accountStatus);
  
  }
}
