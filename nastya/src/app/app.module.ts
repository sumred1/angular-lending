import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BtnPhone1Component } from './btn-phone1/btn-phone1.component';
import { ContentComponent } from './content/content.component';
import { BtnPhone2Component } from './btn-phone2/btn-phone2.component';
import { HeaderrComponent } from './headerr/headerr.component';
import { PreviewPageComponent } from './preview-page/preview-page.component';
import { ServicesComponent } from './services/services.component';
import { PriceComponent } from './price/price.component';
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    BtnPhone1Component,
    ContentComponent,
    BtnPhone2Component,
    HeaderrComponent,
    PreviewPageComponent,
    ServicesComponent,
    PriceComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
