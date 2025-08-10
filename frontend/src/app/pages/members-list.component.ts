import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService, FamilyMember } from '../services/api.service';

@Component({
  standalone: true,
  selector: 'app-members-list',
  imports: [CommonModule, RouterLink],
  template: `
  <h2 class="mb-3">Family Members</h2>
  <div class="row g-3">
    <div class="col-md-4" *ngFor="let m of members">
      <div class="card h-100 p-3">
        <img *ngIf="m.photoUrl" [src]="m.photoUrl" class="card-img-top mb-2" alt="{{m.name}} photo">
        <div class="card-body p-0">
          <h5 class="card-title">{{ m.name }}</h5>
          <p class="card-text"><small>{{ m.birthDate }} <span *ngIf="m.deathDate">– {{ m.deathDate }}</span></small></p>
          <a [routerLink]="['/members', m.id]" class="btn btn-outline-primary btn-sm">View</a>
        </div>
      </div>
    </div>
  </div>
  `
})
export class MembersListComponent implements OnInit {
  members: FamilyMember[] = [];
  constructor(private api: ApiService) {}
  ngOnInit() {
    this.api.getFamilyMembers().subscribe(data => this.members = data);
  }
}