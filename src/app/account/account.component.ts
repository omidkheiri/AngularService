import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from '../account.service';
import { LoggingServeice } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
 // providers: [LoggingServeice]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();
  constructor(private loggingService:LoggingServeice,private accountServie:AccountService){}

  onSetTo(status: string) {
  this.accountServie.updateStatus( this.id,status)
   // this.loggingService.logStatusChange(status);
   this.accountServie.statusUpdated.emit(status);
  }
}
