import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomerutaComponent } from './homeruta.component';

describe('HomerutaComponent', () => {
  let component: HomerutaComponent;
  let fixture: ComponentFixture<HomerutaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomerutaComponent]
    });
    fixture = TestBed.createComponent(HomerutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
