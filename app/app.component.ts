import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
    url: string = "https://app.powerbi.com/groups/me/reports/a92315e2-2ddf-4f35-96d9-bba3aefdab96/ReportSection70f512fe25589a8544fc";

    // url :string = "https://app.powerbi.com/groups/me/reports/a92315e2-2ddf-4f35-96d9-bba3aefdab96/ReportSection70f512fe25589a8544fc";
   urlMap: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlMap= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
