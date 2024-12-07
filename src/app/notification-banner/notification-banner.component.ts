import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-banner',
  template: `
    <div *ngIf="isMobile" class="mobile-alert">
      A mobile version is on the works. Please use the desktop version in the meantime.
    </div>
  `,
  styles: [`
    .mobile-alert {
      background-color: #ffcc00;
      color: #333;
      padding: 10px;
      text-align: center;
      font-weight: bold;
    }
  `]
})
export class NotificationBannerComponent implements OnInit {
  isMobile: boolean = false;

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize(): void {
    this.isMobile = window.innerWidth <= 768;
  }
}
