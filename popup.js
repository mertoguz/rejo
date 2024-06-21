'use strict';

import { ACTION } from "./modules/enum.js";

document.getElementById('rejo-btn').addEventListener('click', () => {
  chrome.runtime.sendMessage({
    action: ACTION.UNCHECK_ALL_CHECKBOXES
  }, onResponse);
});

function onResponse(result) {
  document.getElementById('result').innerText = result;
}