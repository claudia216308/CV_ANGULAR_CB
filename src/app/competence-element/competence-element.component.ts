import { Component, OnInit, Input  } from '@angular/core';
import { Competence} from '../competence';

@Component({
  selector: 'app-competence-element',
  templateUrl: './competence-element.component.html',
  styleUrls: ['./competence-element.component.css']
})
export class CompetenceElementComponent implements OnInit {

  @Input() graphColor: string;
  @Input() competence: Competence;
  

  cssClass: string = "";

  ngOnInit() {
    this.cssClass  = "c100 p"+ this.competence.percentage +  " " + this.graphColor;
  
    //cercles responsive
    $(window).on('load resize', function () {
      if($(window).width() <=1000) $('.circle').addClass("big");
      else $('.circle').removeClass("big");
  });
  }
  

}
