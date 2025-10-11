import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

import type { Paths } from 'app/paths';
import type { Skills } from 'app/skills';
import type { Contacts } from 'app/contacts';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http = inject(HttpClient);

  readonly getSkills = () => this.http.get<Skills[]>(environment.api.paths);
  readonly getPaths = () => this.http.get<Paths[]>(environment.api.skills);
  readonly getContacts = () => this.http.get<Contacts>(environment.api.contacts);
}
