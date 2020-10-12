import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './home-page.component';
import {HomePageViewComponent} from './components/home-page-view/home-page-view.component';


@NgModule({
  declarations: [HomePageComponent, HomePageViewComponent],
  imports: [
    CommonModule
  ]
})
export class HomePageModule {
}
