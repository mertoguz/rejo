'use strict';

import { ACTION } from "./modules/enum.js";
import { uncheckAllCheckBoxes } from "./modules/helpers.js";

chrome.runtime.onMessage.addListener((msg, _, callback) => {
  if (msg.action === ACTION.UNCHECK_ALL_CHECKBOXES) {
    chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
      chrome.scripting.executeScript(
        {
          target: { tabId: tab.id },
          func: uncheckAllCheckBoxes,
        },
        (results) => {
          callback(results[0].result);
        }
      );
    });
    return true;
  }
});
