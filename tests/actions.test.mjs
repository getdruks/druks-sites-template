import assert from 'node:assert/strict';
import test from 'node:test';
import { validateAction } from '../src/content/actions.ts';

const page = new URL('https://shop.example/');
const action = (href) => ({ label: 'Book', href });

for (const href of ['#booking', '/#booking', '#%62ooking', 'https://shop.example/#booking', '/?ref=hero#booking']) {
  test(`reject booking self-link: ${href}`, () => {
    assert.throws(() => validateAction(action(href), 'booking', page), /own section/);
  });
}

test('the hero can link to the booking section', () => {
  assert.doesNotThrow(() => validateAction(action('#booking'), 'top', page));
});

for (const href of ['https://booking.example/shop', 'mailto:shop@example.com', 'tel:+441234567890']) {
  test(`accept real destination: ${href}`, () => {
    assert.doesNotThrow(() => validateAction(action(href), 'booking', page, true));
  });
}

for (const href of ['#contact', '/', 'javascript:alert(1)', 'data:text/plain,book']) {
  test(`reject final action without destination: ${href}`, () => {
    assert.throws(() => validateAction(action(href), 'booking', page, true), /destination/);
  });
}

test('reject location directions self-link', () => {
  assert.throws(() => validateAction(action('#location'), 'location', page), /own section/);
});

test('require both action fields', () => {
  for (const value of [{ label: ' ', href: '#booking' }, { label: 'Book', href: ' ' }]) {
    assert.throws(() => validateAction(value, 'top', page), /label and href/);
  }
});
