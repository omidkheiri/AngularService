
import { EventEmitter, Injectable } from "@angular/core";
import { LoggingServeice } from "./logging.service";
//--> If you need to work with another service in your service you need
//    to use this line though it is recommended to use this line in all
//    service outside of Class
@Injectable()
export class AccountService {
   
    accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];


//--> To be aware of changes in service in a child component 
//    we can create an 'event emitter' and implement an 
//    subscribe in the service consumer ==> you clould check new account component line 20
statusUpdated=new EventEmitter<string>();

  constructor(private logginServeice:LoggingServeice){}
  addAccount(name:string,status:string){
    this.accounts.push({name: name,status:status});
    this.logginServeice.logStatusChange(status);
  }
  updateStatus(id:number,status:string){
    this.accounts[id].status = status;
    this.logginServeice.logStatusChange(status);
  }
}

