import { moduleForComponent, test } from 'ember-qunit';
import { assertTooltipNotVisible, assertTooltipVisible, triggerTooltipTargetEvent } from '../../helpers/ember-tooltips';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tooltip-on-element', 'Integration | Option | event', {
  integration: true,
});

test('tooltip-on-element toggles with hover', function(assert) {

  assert.expect(3);

  this.render(hbs`{{tooltip-on-element}}`);

  assertTooltipNotVisible(assert);

  triggerTooltipTargetEvent('mouseenter');

  assertTooltipVisible(assert);

  triggerTooltipTargetEvent('mouseleave');

  assertTooltipNotVisible(assert);

});

test('tooltip-on-element toggles with click', function(assert) {

  assert.expect(3);

  this.render(hbs`{{tooltip-on-element event='click'}}`);

  assertTooltipNotVisible(assert);

  triggerTooltipTargetEvent('click');

  assertTooltipVisible(assert);

  triggerTooltipTargetEvent('click');

  assertTooltipNotVisible(assert);

});

test('tooltip-on-element toggles with focus', function(assert) {

  assert.expect(3);

  this.render(hbs`{{tooltip-on-element event='focus'}}`);

  assertTooltipNotVisible(assert);

  triggerTooltipTargetEvent('focus');

  assertTooltipVisible(assert);

  triggerTooltipTargetEvent('blur');

  assertTooltipNotVisible(assert);

});

test('tooltip-on-element does not show when event=none', function(assert) {

  assert.expect(4);

  this.render(hbs`{{tooltip-on-element event='none'}}`);

  assertTooltipNotVisible(assert);

  /* Check focus */

  triggerTooltipTargetEvent('focus');

  assertTooltipNotVisible(assert);

  /* Check hover */

  triggerTooltipTargetEvent('mouseenter');

  assertTooltipNotVisible(assert);

  /* Check click */

  triggerTooltipTargetEvent('click');

  assertTooltipNotVisible(assert);

});
