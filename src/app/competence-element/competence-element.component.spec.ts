import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenceElementComponent } from './competence-element.component';

describe('CompetenceElementComponent', () => {
  let component: CompetenceElementComponent;
  let fixture: ComponentFixture<CompetenceElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetenceElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetenceElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
