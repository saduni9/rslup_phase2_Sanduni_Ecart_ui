import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';
import { UserService } from '../'; // Import your user service

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let userService: UserService; // Declare UserService for mocking

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserListComponent],
      providers: [UserService], // Add UserService to providers
    });
    
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService); // Inject UserService

    // Spy on the actual service method to control its behavior
    spyOn(userService, 'getUsers').and.returnValue([
      { id: 1, name: 'User 1' },
      { id: 2, name: 'User 2' },
    ]);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have users after component initialization', () => {
    expect(component.users).toBeTruthy();
    expect(component.users.length).toBeGreaterThan(0);
  });

  it('should render user names in the template', () => {
    const compiled = fixture.nativeElement;
    const userList = compiled.querySelector('.user-list');

    expect(userList.textContent).toContain('User 1');
    expect(userList.textContent).toContain('User 2');
  });

  it('should call getUser service method during ngOnInit', () => {
    // Arrange: We've already spied on the getUsers method in beforeEach
    // Act: ngOnInit is called during component creation
    // Assert: Expect the getUsers method to have been called
    expect(userService.getUsers).toHaveBeenCalled();
  });

  // Add more test cases as needed

});
