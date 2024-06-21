'use strict';

import { ACTION } from "./modules/enum.js";

function showResult(result) {
  const resultEl = document.getElementById('result');

  resultEl.innerText = result;

  setTimeout(() => {
    resultEl.innerText = '';
  }, 3000);
}

document.getElementById('rejo-btn').addEventListener('click', async () => {
  await chrome.runtime.sendMessage({
    action: ACTION.UNCHECK_ALL_CHECKBOXES
  }, showResult)
});