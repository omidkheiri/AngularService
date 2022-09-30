import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../account.service';
import { LoggingServeice } from '../logging.service';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
 // When you add next line you create a new instance of service which
 // does not accessible from the parent component So I have to remove this line

 // providers:[LoggingServeice]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();
constructor(private accountServie:AccountService){

//-> subscribe wahte to event happend in service
this.accountServie.statusUpdated.subscribe((status:string) =>{alert("new status " +status)} )


}
  onCreateAccount(accountName: string, accountStatus: string) {
   
   this.accountServie.addAccount(accountName,accountStatus);
  
  }
}
