import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirect(){
    this.router.navigate(['./experience']);
  }

  scroll (){
    document.getElementById('scrollcards').scrollIntoView({ behavior: 'smooth' } );
  }

}
