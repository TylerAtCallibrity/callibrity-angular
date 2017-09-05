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
    let expected = `Callibrity Solutions, LLC.
                    9462 Towne Square Ave
                    Blue Ash, OH 45242`;
    let got = app.querySelector("p[id*='address']").textContent;
    expect(got).toContain("Callibrity Solutions, LLC.");
    expect(got).toContain("9462 Towne Square Ave");
    expect(got).toContain("Blue Ash, OH 45242");
  });

  it('should have a recent blogs section', () => {
    let app = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    let expected = "Recent blog posts:";
    let got = app.querySelector("p[id*='recent-blog-posts']");

    expect(expected).toEqual(got.textContent);
  });

  it('should have award logos', () => {
    let app = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    let bestPlacesImage = "bptw-2016.png";
    let fast55Image = "fast55.png";
    let inc5000Image = "Inc5000_colorstacked.png";
    let gotBestPlacesImage = app.querySelector(`img[src*='${bestPlacesImage}']`);
    let gotFast55Image = app.querySelector(`img[src*='${fast55Image}']`);
    let gotInc5000Image = app.querySelector(`img[src*='${inc5000Image}']`);

    expect(gotBestPlacesImage).toBeTruthy();
    expect(gotFast55Image).toBeTruthy();
    expect(gotInc5000Image).toBeTruthy();
  });
});
