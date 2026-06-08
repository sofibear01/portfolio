import { Component } from '@angular/core';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { Home } from './sections/home/home';
import { About } from './sections/about/about';
import { Skills } from './sections/skills/skills';
import { Projects } from './sections/projects/projects';
import { Contact } from './sections/contact/contact';
import { Education } from './sections/education/education';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Home, About, Education, Skills, Projects, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
