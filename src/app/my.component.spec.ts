import { TestBed } from '@angular/core/testing';
import { MyComponent } from './my.component';

describe('MyComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyComponent],
    });
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(MyComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
