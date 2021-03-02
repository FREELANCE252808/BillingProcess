import { AfterViewInit, Component, ElementRef,  OnInit,  ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from 'src/app/models/nav-item';
import { NavService } from 'src/app/services/nav.service';
import { AccountService } from '../login/services/account.service';
import { AuthService } from '../login/services/auth.service';
import { TokenStorage } from '../login/services/token-storage.service';

@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.scss']
})
export class MasterPageComponent implements OnInit,  AfterViewInit {
  @ViewChild('appDrawer') appDrawer: ElementRef;
  navItems: NavItem[] = [];

  constructor(private navService: NavService, private router: Router,
     public accountService: AccountService,public tokenStorage:TokenStorage) {
  }
  ngOnInit(): void {
    this.navItems = [
      {
        displayName: 'Home',
        iconName: 'home',
        route: '',
        children: []
      },
      {
        displayName: 'Change Password',
        iconName: 'password',
        route: '/change-password',
        children: []
      },
      {
        displayName: 'Add Charges',
        iconName: 'add',
        route: '',
        children: []
      },

      {
        displayName: 'Move Charges',
        iconName: 'compare_arrows',
        route: '',
        children: []
      },
  /*
      {
        displayName: 'Orlando',
        iconName: 'videocam',
        route: 'orlando',
        children: [
          {
            displayName: 'Speakers',
            iconName: 'group',
            route: 'orlando/speakers',
            children: [
              {
                displayName: 'Michael Prentice',
                iconName: 'person',
                route: 'orlando/speakers/michael-prentice',
                children: [
                  {
                    displayName: 'Create Enterprise UIs',
                    iconName: 'star_rate',
                    route: 'orlando/speakers/michael-prentice/material-design'
                  }
                ]
              },
              {
                displayName: 'Stephen Fluin',
                iconName: 'person',
                route: 'orlando/speakers/stephen-fluin',
                children: [
                  {
                    displayName: 'What\'s up with the Web?',
                    iconName: 'star_rate',
                    route: 'orlando/speakers/stephen-fluin/what-up-web'
                  }
                ]
              },
              {
                displayName: 'Mike Brocchi',
                iconName: 'person',
                route: 'orlando/speakers/mike-brocchi',
                children: [
                  {
                    displayName: 'My ally, the CLI',
                    iconName: 'star_rate',
                    route: 'orlando/speakers/mike-brocchi/my-ally-cli'
                  },
                  {
                    displayName: 'Become an Angular Tailor',
                    iconName: 'star_rate',
                    route: 'orlando/speakers/mike-brocchi/become-angular-tailor'
                  }
                ]
              }
            ]
          },
          {
            displayName: 'Sessions',
            iconName: 'speaker_notes',
            route: 'orlando/sessions',
            children: [
              {
                displayName: 'Create Enterprise UIs',
                iconName: 'star_rate',
                route: 'orlando/sessions/material-design'
              },
              {
                displayName: 'What\'s up with the Web?',
                iconName: 'star_rate',
                route: 'orlando/sessions/what-up-web'
              },
              {
                displayName: 'My ally, the CLI',
                iconName: 'star_rate',
                route: 'orlando/sessions/my-ally-cli'
              },
              {
                displayName: 'Become an Angular Tailor',
                iconName: 'star_rate',
                route: 'orlando/sessions/become-angular-tailor'
              }
            ]
          },
          {
            displayName: 'Feedback',
            iconName: 'feedback',
            route: 'orlando/feedback'
          }
        ]
      },
      {
        displayName: 'Maleficent',
        iconName: 'videocam',
        route: 'maleficent',
        children: [
          {
            displayName: 'Speakers',
            iconName: 'group',
            route: 'maleficent/speakers',
            children: [
              {
                displayName: 'Michael Prentice',
                iconName: 'person',
                route: 'maleficent/speakers/michael-prentice',
                children: [
                  {
                    displayName: 'Create Enterprise UIs',
                    iconName: 'star_rate',
                    route: 'maleficent/speakers/michael-prentice/material-design'
                  }
                ]
              },
              {
                displayName: 'Stephen Fluin',
                iconName: 'person',
                route: 'maleficent/speakers/stephen-fluin',
                children: [
                  {
                    displayName: 'What\'s up with the Web?',
                    iconName: 'star_rate',
                    route: 'maleficent/speakers/stephen-fluin/what-up-web'
                  }
                ]
              },
              {
                displayName: 'Mike Brocchi',
                iconName: 'person',
                route: 'maleficent/speakers/mike-brocchi',
                children: [
                  {
                    displayName: 'My ally, the CLI',
                    iconName: 'star_rate',
                    route: 'maleficent/speakers/mike-brocchi/my-ally-cli'
                  },
                  {
                    displayName: 'Become an Angular Tailor',
                    iconName: 'star_rate',
                    route: 'maleficent/speakers/mike-brocchi/become-angular-tailor'
                  }
                ]
              }
            ]
          },
          {
            displayName: 'Sessions',
            iconName: 'speaker_notes',
            route: 'maleficent/sessions',
            children: [
              {
                displayName: 'Create Enterprise UIs',
                iconName: 'star_rate',
                route: 'maleficent/sessions/material-design'
              },
              {
                displayName: 'What\'s up with the Web?',
                iconName: 'star_rate',
                route: 'maleficent/sessions/what-up-web'
              },
              {
                displayName: 'My ally, the CLI',
                iconName: 'star_rate',
                route: 'maleficent/sessions/my-ally-cli'
              },
              {
                displayName: 'Become an Angular Tailor',
                iconName: 'star_rate',
                route: 'maleficent/sessions/become-angular-tailor'
              }
            ]
          },
          {
            displayName: 'Feedback',
            iconName: 'feedback',
            route: 'maleficent/feedback'
          }
        ]
      },
      */
    ];

    this.tokenStorage.getisAdmin().subscribe(isAdmin=>{
      if(isAdmin=="true")
      {
          this.navItems.push({
            displayName: 'User Details',
            iconName: 'account_circle',
            route: 'user',
            children: [
            ]
          })
      }
    })

  }

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }

  logOut(event){
    console.log('event');
    this.router.navigateByUrl('/login');
  }
}
