import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HeroDetailComponent } from './hero-detail.component';

import { AppComponent }  from './app.component';
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';

import { RouterModule }   from '@angular/router';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,// <-- import the FormsModule before binding with [(ngModel)]
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      }
    ])


  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  providers: [
   HeroService
 ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
