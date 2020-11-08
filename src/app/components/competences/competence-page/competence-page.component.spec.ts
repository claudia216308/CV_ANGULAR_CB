import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencePageComponent } from './competence-page.component';

describe('CompetenceComponent', () => {
  let component: CompetencePageComponent;
  let fixture: ComponentFixture<CompetencePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetencePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetencePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
