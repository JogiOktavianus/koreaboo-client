import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acc-popover',
  templateUrl: './acc-popover.component.html',
  styleUrls: ['./acc-popover.component.scss'],
})
export class AccPopoverComponent implements OnInit {

  constructor(
    public popoverController: PopoverController,
    public router: Router
  ) { }

  ngOnInit() { }

  signin() {
    this.router.navigate(['/login']);
    this.popoverController.dismiss();
  }

  signup() {
    this.router.navigate(['/register']);
    this.popoverController.dismiss();
  }
}
