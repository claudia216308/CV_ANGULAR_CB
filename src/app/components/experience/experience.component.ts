import { Component, OnInit } from '@angular/core';
import { LIST_EXPERIENCE } from 'src/app/data/mockExperience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {


  entries = LIST_EXPERIENCE
  constructor() { }

  scrolling: boolean;
  verticalTimelinesArray = [];

  ngOnInit() {

    var verticalTimelines = document.getElementsByClassName("js-cd-timeline");
    this.verticalTimelinesArray = [];
    this.scrolling = false;

    var parent = this;
    var verticalTimelinesArray = [];

    if( verticalTimelines.length > 0 ) {
      for( var i = 0; i < verticalTimelines.length; i++) {
        (function(i){
          verticalTimelinesArray.push( new verticalTest(verticalTimelines[i]));
        })(i);
      }

      this.verticalTimelinesArray = verticalTimelinesArray;
      //show timeline blocks on scrolling
      window.addEventListener("scroll", function(event) {
        if( !parent.scrolling ) {
          parent.scrolling = true;
          (!window.requestAnimationFrame) ? setTimeout(function(){
            parent.checkTimelineScroll(parent);
          }, 250) : window.requestAnimationFrame(function(){
            parent.checkTimelineScroll(parent);
          });
        }
      });  

    }      
  }

  checkTimelineScroll(self: any) {
      self.verticalTimelinesArray.forEach(function(timeline){
        //timeline.showBlocks();      
        var currentElement = self.verticalTimelinesArray[0];
          for( var i = 0; i < currentElement.blocks.length; i++) {
            (function(i){
              if( currentElement.contents[i].classList.contains("cd-is-hidden") && currentElement.blocks[i].getBoundingClientRect().top <= window.innerHeight*currentElement.offset ) {
                // add bounce-in animation
                currentElement.images[i].classList.add("cd-timeline__img--bounce-in");
                currentElement.contents[i].classList.add("cd-timeline__content--bounce-in");
                currentElement.images[i].classList.remove("cd-is-hidden");
                currentElement.contents[i].classList.remove("cd-is-hidden");
              }
            })(i);
          }

      });
      this.scrolling = false;
	};

}

export class verticalTest{

  element: Element;
  blocks: NodeListOf<Element>;
  images: NodeListOf<Element>;
  contents: NodeListOf<Element>;
  offset: number;

  constructor(element: Element){
    this.element = element;
		this.blocks = this.element.querySelectorAll("js-cd-block");
		this.images = this.element.querySelectorAll("js-cd-img");
		this.contents = this.element.querySelectorAll("js-cd-content");
    this.offset = 0.8;
    this.hideBlocks();
  }


  hideBlocks() {
		var self = this;
		for( var i = 0; i < this.blocks.length; i++) {
			(function(i){
				if( self.blocks[i].getBoundingClientRect().top > window.innerHeight*self.offset ) {
					self.images[i].classList.add("cd-is-hidden"); 
					self.contents[i].classList.add("cd-is-hidden"); 
				}
			})(i);
		}
	};
}