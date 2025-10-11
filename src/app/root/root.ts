import { AfterViewInit, Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Wrapper } from 'app/wrapper/wrapper';
import { Header } from 'app/header/header';
import { Footer } from 'app/footer/footer';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FontAwesomeModule, RouterLink, Wrapper, Header, Footer],
  templateUrl: './root.html',
})
export class AppRoot {
  constructor(faLibrary: FaIconLibrary) {
    faLibrary.addIconPacks(fab);
  }

  @ViewChild(Header)
  set headerHost(v: Header) {
    this.headerWidth = v.elementRef.nativeElement.offsetHeight;
  }
  // headerHost!: Header;

  // ngAfterViewInit(): void {
  //   console.log('log', this.headerHost.elementRef.nativeElement.offsetHeight);
  // }

  headerWidth!: number;
}
