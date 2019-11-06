/**
 * @license
 * Copyright (c) 2019 XGDFalcon®. All Rights Reserved.
 *
 * XGDFalcon LLC retains all intellectual property rights to the code distributed as part of the
 * Control Point System Software (CPSS) Framework.
 */
import { TestBed } from '@angular/core/testing';

import { CPSSTOCService } from './cpss-toc.service';

describe('CPSSTOCService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CPSSTOCService = TestBed.get(CPSSTOCService);
    expect(service).toBeTruthy();
  });
});
