import { Component, signal } from '@angular/core';
import { ApiService } from 'app/api/api.service';
import { Skills } from 'app/skills';
import { single } from 'rxjs';

@Component({
  selector: 'app-skills-list',
  imports: [],
  standalone: true,
  templateUrl: './skills-list.html',
})
export class SkillsList {
  constructor(private readonly apiService: ApiService) {}

  readonly skills = signal<Array<Skills>>([]);

  async ngOnInit() {
    (await this.apiService.getSkills()).subscribe({
      next: this.skills.set,
    });
  }
}
