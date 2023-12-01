import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeListSkeletonComponent } from './coffee-list-skeleton.component';

describe('CoffeeListSkeletonComponent', () => {
  let component: CoffeeListSkeletonComponent;
  let fixture: ComponentFixture<CoffeeListSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoffeeListSkeletonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoffeeListSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
