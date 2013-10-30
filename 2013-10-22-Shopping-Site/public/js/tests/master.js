'use strict';

module('Integration Testing', {setup: setupTest, teardown: teardownTest});

function setupTest(){
  turnHandlersOff();
  turnHandlersOn();
  // Reset Global Variables Here
  db.products = [];
  // Clean Out Test Database Here
  Δdb.remove();
}

function teardownTest(){
}

test('Add Product', function(){
  expect(12);

  $('#product-image').val('ipad-air.png');
  $('#product-name').val('Ipad Air');
  $('#product-weight').val('1.0');
  $('#product-price').val('499.00');
  $('#product-off').val('10');
  $('#add-product').trigger('click');

  equal(db.products.length, 1, 'products array should have 1 element');
  ok(db.products[0].id, 'id should be populated');
  ok(db.products[0] instanceof Product, 'product should be an instanceof Product');
  equal(db.products[0].image, 'ipad-air.png', 'product should have an image of an image');
  equal(db.products[0].name, 'Ipad Air', 'product should have a name');
  equal(db.products[0].weight, 1.0, 'product should have a weight');
  equal(db.products[0].salePrice(), 449.1, 'product should have a sale price');

  equal($('#products > tr').length, 2, 'table has 2 rows');
  equal($('#products > tr:nth-child(2) > td').length, 6, 'product table has 6 tds in second row');
  equal($('#products .product-name').text(), 'Ipad Air', 'product has name of Ipad Air');
  equal($('#products .product-sale').text(), '$449.10', 'product has a sale price of 449.1');
  equal($('#products .product-weight').text(), '1.0', 'product has a weight of 1.0');
  equal($('#products .product-image img').attr('src'), '/img/ipad-air.png', 'product has appropriate image');







  // equal('actual-result', 'expected-result', 'description of assertion');
  // ok('result-that-is-true-or-false', 'description of assertion');
  // deepEqual('actual-result', 'expected-result', 'description of assertion');
});

// asyncTest('<name-of-feature>', function(){
//   expect(1);
// });
