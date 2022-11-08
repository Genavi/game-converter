import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { SplashService } from './shared/services/splash.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'game-converter';
  constructor(public authService: AuthService, private splashService: SplashService) {}
 
  ngOnInit(): void {
    setTimeout(() => {
       this.splashService.stop();
    }, 5000);
  }
}
