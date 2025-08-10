import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface FamilyMember {
  id: number;
  name: string;
  birthDate: string;
  deathDate?: string;
  photoUrl?: string;
  biography?: string;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  // For Codespaces, you'll see a forwarded port for the backend; paste it here if needed.
  private baseUrl = 'https://animated-space-computing-machine-xv6qrg7pw993v59g-8080.app.github.dev/api';

  constructor(private http: HttpClient) {}

  getFamilyMembers(): Observable<FamilyMember[]> {
    return this.http.get<FamilyMember[]>(`${this.baseUrl}/members`);
  }

  getFamilyMember(id: number): Observable<FamilyMember> {
    return this.http.get<FamilyMember>(`${this.baseUrl}/members/${id}`);
  }
}