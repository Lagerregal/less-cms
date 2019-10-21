import {AfterViewInit, Component, ElementRef} from '@angular/core';
import { AmplifyService }  from 'aws-amplify-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'less-cms';
  signedIn: boolean;
  /* current user */
  currentUser: any;

  constructor(private elementRef: ElementRef, private amplifyService: AmplifyService ) {
    this.amplifyService.authStateChange$
      .subscribe(authState => {
        this.signedIn = authState.state === 'signedIn';
        if (!authState.user) {
          this.currentUser = null;
        } else {
          this.currentUser = authState.user;
        }
      });
  }

  ngAfterViewInit(){
    // this.elementRef.nativeElement.ownerDocument.body.classList.add('mat-app-background');
  }
}
