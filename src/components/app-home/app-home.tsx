import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  items: number[] = Array(100).fill(0).map((_, i) => i);

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <ion-list>
          {this.items.map(item =>
            <ion-item href="/profile/ionic">
              <ion-label>Item {item}</ion-label>
            </ion-item>
          )}
        </ion-list>

      </ion-content>
    ];
  }
}
