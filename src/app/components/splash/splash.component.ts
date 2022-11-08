import { Component, OnInit } from '@angular/core';
import { SplashService } from '../../shared/services/splash.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {
  // The screen starts with the maximum opacity
  public opacityChange = 1;
  public splashTransition: string;
  // First access the splash is visible
  public showSplash = true;
  readonly ANIMATION_DURATION = 1;

  constructor(
    private splashService: SplashService
  ) { 
    this.splashTransition = "";
  }
  
  ngOnInit(): void {
    // Somewhere the stop method has been invoked
    this.splashService.subscribe(() => {
      this.hideSplashAnimation()
    });
  
  }

  private hideSplashAnimation() {
    // Setting the transition
    this.splashTransition = `opacity ${this.ANIMATION_DURATION}s`;
    this.opacityChange = 0;
 
    setTimeout(() => {
       // After the transition is ended the showSplash will be hided
       this.showSplash = !this.showSplash;
    }, 1000);
 }
}
