import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { NavigationComponent } from './navigation.component';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;
  let expected: string;
  let got: string;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have the About Us link', async() => {
    expected = 'About Us';
    got = NavigationComponent['ABOUT_US'];
    let app = fixture.debugElement.nativeElement
    expect(expected).toEqual(got);
    expect(expected).toEqual(component.getAboutUsLinkText());
    expect(app.querySelector('nav').textContent).toContain(expected);
  });

  it('should have the Services link', async() => {
    expected = 'Services';
    got = NavigationComponent['SERVICES'];
    let app = fixture.debugElement.nativeElement
    expect(expected).toEqual(got);
    expect(expected).toEqual(component.getServicesLinkText());
    expect(app.querySelector('nav').textContent).toContain(expected);
  });

  it('should have the People link', async() => {
    expected = 'People';
    got = NavigationComponent['PEOPLE'];
    let app = fixture.debugElement.nativeElement
    expect(expected).toEqual(got);
    expect(expected).toEqual(component.getPeopleLinkText());
    expect(app.querySelector('nav').textContent).toContain(expected);  });

  it('should have the Community link', async() => {
    expected = 'Community';
    got = NavigationComponent['COMMUNITY'];
    let app = fixture.debugElement.nativeElement
    expect(expected).toEqual(got);
    expect(expected).toEqual(component.getCommunityLinkText());
    expect(app.querySelector('nav').textContent).toContain(expected);
  });

  it('should have the Careers link', async() => {
    expected = 'Careers';
    got = NavigationComponent['CAREERS'];
    let app = fixture.debugElement.nativeElement
    expect(expected).toEqual(got);
    expect(expected).toEqual(component.getCareersLinkText());
    expect(app.querySelector('nav').textContent).toContain(expected);
  });

  it('should have the Blog link', async() => {
    expected = 'Blog';
    got = NavigationComponent['BLOG'];
    let app = fixture.debugElement.nativeElement
    expect(expected).toEqual(got);
    expect(expected).toEqual(component.getBlogLinkText());
    expect(app.querySelector('nav').textContent).toContain(expected);  });

  it('should have the Contact link', async() => {
    expected = 'Contact';
    got = NavigationComponent['CONTACT'];
    let app = fixture.debugElement.nativeElement
    expect(expected).toEqual(got);
    expect(expected).toEqual(component.getContactLinkText());
    expect(app.querySelector('nav').textContent).toContain(expected);
  });

});

