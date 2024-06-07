import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() toggleMethod: Function | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  invokeToggle() {
    if(this.toggleMethod){
      this.toggleMethod();
    }
  }

}
