// DB 없이 도는 테스트 — npm test (Node 내장 node:test)
const test = require('node:test');
const assert = require('node:assert');
const { cleanTitle } = require('../todo');

test('앞뒤 공백을 지운다', () => {
  assert.strictEqual(cleanTitle('  우유 사기  '), '우유 사기');
});

test('비어 있으면 빈 문자열', () => {
  assert.strictEqual(cleanTitle('   '), '');
  assert.strictEqual(cleanTitle(undefined), '');
});

test('제목은 200자까지 남긴다', () => {
  assert.strictEqual(cleanTitle('가'.repeat(250)).length, 200);
});
