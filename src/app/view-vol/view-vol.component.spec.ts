import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewVolComponent } from './view-vol.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ViewVolComponent', () => {
  let component: ViewVolComponent;
  let fixture: ComponentFixture<ViewVolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewVolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
/*
  it('should create the app', () => {
    const fixture = TestBed.createComponent(ViewVolComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'workshop'`, () => {
    const fixture = TestBed.createComponent(ViewVolComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('workshop');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ViewVolComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('workshop app is running!');
  });*/
});
