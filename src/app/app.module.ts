import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {
  NgbDateAdapter,
  NgbDateNativeUTCAdapter,
  NgbDateParserFormatter,
  NgbDatepicker,
  NgbDatepickerI18n,
  NgbModule
} from '@ng-bootstrap/ng-bootstrap';
import {registerLocaleData} from '@angular/common';
import localeRu from '@angular/common/locales/ru';

import {HeaderModule} from './modules/system/header/header.module';
import {AppInterceptor} from './interceptors/app-interceptor';
import {NgbDateFormater} from './utils/ngb-date-formater';
import {CustomDatepickerI18n} from './utils/datepicker-localization';

registerLocaleData(localeRu);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    HeaderModule
  ],
  providers: [
    {provide: LOCALE_ID, useFactory: () => 'ru'},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true
    },
    {provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n},
    {provide: NgbDatepicker},
    {provide: NgbDateAdapter, useClass: NgbDateNativeUTCAdapter},
    {provide: NgbDateParserFormatter, useClass: NgbDateFormater},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
