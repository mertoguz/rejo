'use strict';

export function uncheckAllCheckBoxes() {
  const switchers = document.querySelectorAll('*[role=dialog] input[type=checkbox]');

  if (switchers.length === 0) {
    return "There were no switchers."
  }

  let uncheckedAmount = 0;
  document.querySelectorAll('*[role=dialog] input[type=checkbox]')
    .forEach(
      cb => {
        if (cb.checked) {
          cb.click()
          uncheckedAmount++;
        }
      }
    );
  return `${uncheckedAmount} cookies rejected!`;
}