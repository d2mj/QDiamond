import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { ContainerItemComponent } from './container/container-item/container-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ContainerItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
