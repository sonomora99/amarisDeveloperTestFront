import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input()
  statusCode:string;

  @Input()
  message:string;
  
  notificationColor:any = {
    "200":"alert-success",
    "429":"alert-danger",

  }

  constructor() { }

  ngOnInit(): void {
  }

}
