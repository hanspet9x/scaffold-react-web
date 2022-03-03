import {getClassNames} from './utils';

describe('Utils', () => {
  test('getClass names', () => {
    expect(getClassNames('button', 'input')).toBe('button input');
  });
});
