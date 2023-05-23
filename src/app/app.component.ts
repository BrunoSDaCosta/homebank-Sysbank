import { Component, ElementRef, ViewChild } from '@angular/core';
import keenSlider, { KeenSliderInstance } from 'keen-slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
    '../../node_modules/keen-slider/keen-slider.min.css'
  ]
})
export class AppComponent {
  title = 'homebank-sysnovare';

  @ViewChild('sliderRef')
  sliderRef!: ElementRef<HTMLElement>
  @ViewChild('cardSliderRef')
  cardSliderRef!: ElementRef<HTMLElement>

  slider?: KeenSliderInstance
  cardSlider?: KeenSliderInstance

  ngAfterViewInit(){
    this.slider = new keenSlider(this.sliderRef.nativeElement, {
      loop: false,
      mode: 'free',
      slides: {
        perView: 4.5,
        spacing: 14
      }
    });

    this.cardSlider = new keenSlider(this.cardSliderRef.nativeElement, {
      loop: false,
      mode: 'free',
      slides: {
        perView: 1.5,
        spacing: 14
      }
    });
  }
}
