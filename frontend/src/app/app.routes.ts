import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { MembersListComponent } from './pages/members-list.component';
import { MemberDetailComponent } from './pages/member-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'members', component: MembersListComponent },
  { path: 'members/:id', component: MemberDetailComponent },
  { path: 'stories', component: HomeComponent }, // placeholder
  { path: 'gallery', component: HomeComponent }  // placeholder
];