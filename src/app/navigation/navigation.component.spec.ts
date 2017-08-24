import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have a navigation element', async() => {
    fixture = TestBed.createComponent(NavigationComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('nav')).toBeTruthy();
  });

  it('should have all navigation elements', async() => {
    fixture = TestBed.createComponent(NavigationComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('nav').textContent).toContain('About us');
    expect(compiled.querySelector('nav').textContent).toContain('Services');
    expect(compiled.querySelector('nav').textContent).toContain('People');
    expect(compiled.querySelector('nav').textContent).toContain('Community');
    expect(compiled.querySelector('nav').textContent).toContain('Careers');
    expect(compiled.querySelector('nav').textContent).toContain('Blog');
  });

  it('should pull navigation elements from nav object', async() => {
    fixture = TestBed.createComponent(NavigationComponent);
    let app  = fixture.debugElement.componentInstance;
    expect(app.navigationElements).toBeTruthy();
    let expectedNavigationElements = ['About us', 'Services', 'People', 'Community', 'Careers', 'Blog'];

    expectEqualArrays(expectedNavigationElements, app.navigationElements);
  });
});

function expectEqualArrays(array1, array2){
  expect(array1.length).toEqual(array2.length);
    for (var i = 0; i < array1.length; i++){
      expect(array1[i]).toEqual(array2[i]);
    }
}
