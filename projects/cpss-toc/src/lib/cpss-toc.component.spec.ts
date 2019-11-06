/**
 * @license
 * Copyright (c) 2019 XGDFalcon®. All Rights Reserved.
 *
 * XGDFalcon LLC retains all intellectual property rights to the code distributed as part of the
 * Control Point System Software (CPSS) Framework.
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CPSSTOCComponent } from './cpss-toc.component';

describe('CPSSTOCComponent', () => {
  let component: CPSSTOCComponent;
  let fixture: ComponentFixture<CPSSTOCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CPSSTOCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CPSSTOCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
