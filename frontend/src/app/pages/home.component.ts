import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [RouterLink],
  template: `
  <div class="row g-3">
    <div class="col-md-6">
      <div class="card p-4">
        <h2 class="h4">Tribute to Our Grandparents</h2>
        <p>Create stories, add photos, and preserve memories.</p>
        <a routerLink="/members" class="btn btn-primary">View Family</a>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card p-4">
        <h2 class="h5">Quick Links</h2>
        <ul class="mb-0">
          <li><a routerLink="/stories">Stories</a></li>
          <li><a routerLink="/gallery">Gallery</a></li>
        </ul>
      </div>
    </div>
  </div>
  `
})
export class HomeComponent {}