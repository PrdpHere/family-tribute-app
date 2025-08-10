import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiService, FamilyMember } from '../services/api.service';

@Component({
  standalone: true,
  selector: 'app-member-detail',
  imports: [CommonModule],
  template: `
  <div *ngIf="member">
    <div class="d-flex align-items-center gap-3 mb-3">
      <img *ngIf="member.photoUrl" [src]="member.photoUrl" alt="{{member.name}} photo" style="width:120px; height:120px; object-fit:cover; border-radius:12px;">
      <div>
        <h2 class="h4 mb-1">{{ member.name }}</h2>
        <div><small>{{ member.birthDate }} <span *ngIf="member.deathDate">– {{ member.deathDate }}</span></small></div>
      </div>
    </div>
    <div class="card p-3 mb-3">
      <h3 class="h6">Biography</h3>
      <p class="mb-0" *ngIf="member.biography; else noBio">{{ member.biography }}</p>
      <ng-template #noBio><em>No biography yet.</em></ng-template>
    </div>
  </div>
  `
})
export class MemberDetailComponent implements OnInit {
  member?: FamilyMember;
  constructor(private route: ActivatedRoute, private api: ApiService) {}
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.api.getFamilyMember(id).subscribe(m => this.member = m);
  }
}