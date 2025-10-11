import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from 'app/api/api.service';
import { Paths } from 'app/paths';

@Component({
  selector: 'app-paths-list',
  imports: [RouterLink],
  templateUrl: './paths-list.html',
  styles: ``,
})
export class PathsList {
  constructor(private readonly apiService: ApiService) {}

  readonly paths = signal<Array<Paths>>([]);

  ngOnInit() {
    this.apiService.getPaths().subscribe({
      next: this.paths.set,
    });
  }
}
