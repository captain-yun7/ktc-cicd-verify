// 할 일 제목 정리: 앞뒤 공백을 지우고 MAX_TITLE 글자까지만 남긴다. 비어 있으면 '' (app.js가 400으로 거절)
const MAX_TITLE = 100;

function cleanTitle(input) {
  return String(input || '').trim().slice(0, MAX_TITLE);
}

module.exports = { cleanTitle, MAX_TITLE };
