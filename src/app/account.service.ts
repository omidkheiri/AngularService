
import { EventEmitter, Injectable } from "@angular/core";
import { LoggingServeice } from "./logging.service";
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

function injectable() {
    throw new Error("Function not implemented.");
}
