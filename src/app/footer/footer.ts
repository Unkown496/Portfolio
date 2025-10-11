import { Component } from '@angular/core';
import { SkillsList } from 'app/skills-list/skills-list';
import { PathsList } from 'app/paths-list/paths-list';
import { ContactsList } from 'app/contacts-list/contacts-list';

@Component({
  selector: 'app-footer',
  imports: [SkillsList, PathsList, ContactsList],
  templateUrl: './footer.html',
  styles: ``,
})
export class Footer {}
