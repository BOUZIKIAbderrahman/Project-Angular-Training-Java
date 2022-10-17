import { TestBed } from '@angular/core/testing';

import { ShopGridDefaultService } from './shop-grid-default.service';

describe('ShopGridDefaultService', () => {
  let service: ShopGridDefaultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopGridDefaultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
