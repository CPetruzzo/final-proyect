import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { PieDePaginaComponent } from './componentes/pie-de-pagina/pie-de-pagina.component';
import { AboutUsComponent } from './componentes/about-us/about-us.component';
import { OutContentComponent } from './componentes/out-content/out-content.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { SlideComponent } from './componentes/slide/slide.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PieDePaginaComponent,
    AboutUsComponent,
    OutContentComponent,
    ContactComponent,
    SlideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
