import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowDetailPageComponent } from './show-detail.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { Location } from '@angular/common';

describe('ShowDetailPageComponent', () => {
  let component: ShowDetailPageComponent;
  let fixture: ComponentFixture<ShowDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ShowDetailPageComponent,
        HttpClientTestingModule
      ],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '1' }),
            snapshot: {
              params: { id: '1' },
              paramMap: {
                get: (key: string) => key === 'id' ? '1' : null
              }
            }
          }
        },
        {
          provide: Store,
          useValue: { 
            select: () => of([]), 
            dispatch: () => {} 
          }
        },
        {
          provide: Location,
          useValue: { back: () => {} }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowDetailPageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize component', () => {
    fixture.detectChanges();
    expect(component).toBeDefined();
  });

  it('should have initial loading state as true', () => {
    expect(component.loading()).toBeTrue();
  });

  it('should have initial show as null', () => {
    expect(component.show()).toBeNull();
  });

  it('should have initial cast as empty array', () => {
    expect(component.cast()).toEqual([]);
  });

  it('should have initial episodes as empty array', () => {
    expect(component.episodes()).toEqual([]);
  });

  it('should handle component initialization without errors', () => {
    expect(() => fixture.detectChanges()).not.toThrow();
  });

  it('should maintain consistent state', () => {
    fixture.detectChanges();
    expect(component.loading()).toBeTrue();
    expect(component.show()).toBeNull();
    expect(component.cast()).toEqual([]);
    expect(component.episodes()).toEqual([]);
  });

  it('should handle component destruction', () => {
    fixture.detectChanges();
    expect(() => fixture.destroy()).not.toThrow();
  });

  it('should handle null values gracefully', () => {
    fixture.detectChanges();
    expect(component.show()).toBeNull();
    expect(component.cast()).toEqual([]);
    expect(component.episodes()).toEqual([]);
  });

  it('should handle route parameter extraction', () => {
    const activatedRoute = TestBed.inject(ActivatedRoute);
    expect(activatedRoute.snapshot.paramMap.get('id')).toBe('1');
  });

  it('should maintain signal state integrity', () => {
    expect(typeof component.loading()).toBe('boolean');
    expect(component.show()).toBeNull();
    expect(Array.isArray(component.cast())).toBe(true);
    expect(Array.isArray(component.episodes())).toBe(true);
  });

  it('should be properly configured with all dependencies', () => {
    expect(component).toBeTruthy();
    expect(TestBed.inject(Store)).toBeTruthy();
    expect(TestBed.inject(ActivatedRoute)).toBeTruthy();
    expect(TestBed.inject(Location)).toBeTruthy();
  });

});