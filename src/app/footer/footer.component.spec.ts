import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have the copyright information', () => {
    let app = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    let expected = `Copyright 2016 Callibrity Solutions, LLC. 
                    9462 Towne Square Ave
                    Blue Ash, OH 45242`;
    let got = app.querySelector('div').textContent;
    expect(got).toContain(expected);
  });
});
