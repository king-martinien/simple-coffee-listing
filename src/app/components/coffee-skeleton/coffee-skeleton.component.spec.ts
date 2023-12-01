import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeSkeletonComponent } from './coffee-skeleton.component';

describe('CoffeeSkeletonComponent', () => {
  let component: CoffeeSkeletonComponent;
  let fixture: ComponentFixture<CoffeeSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoffeeSkeletonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoffeeSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
