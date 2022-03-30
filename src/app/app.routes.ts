
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { IntroComponent } from './components/intro/intro.component';



const APP_ROUTES: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'intro', component: IntroComponent },

  
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);