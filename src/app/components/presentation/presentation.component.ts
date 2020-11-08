import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  @ViewChild('scrollcards') scrollcards: ElementRef;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirect(){
    this.router.navigate(['./experience']);
  }

  scroll (){
    this.scrollcards.nativeElement.scrollIntoView({ behavior: 'smooth' } );
  }

}
