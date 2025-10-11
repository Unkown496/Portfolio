import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/api/api.service';
import { Contacts } from 'app/contacts';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faLocationDot, faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons';
import { SimpleIcon } from 'app/simple-icon/simple-icon';

@Component({
  selector: 'app-contacts-list',
  imports: [FontAwesomeModule, SimpleIcon],
  templateUrl: './contacts-list.html',
  styles: ``,
})
export class ContactsList implements OnInit {
  constructor(private readonly apiService: ApiService) {}

  contacts!: Contacts;

  icons = {
    faEnvelope,
    faMobile,
    faLocationDot,
  };

  ngOnInit(): void {
    this.apiService.getContacts().subscribe({
      next: data => (this.contacts = data),
    });
  }
}
