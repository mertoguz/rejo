'use strict';

export function uncheckAllCheckBoxes() {
  const switchers = document.querySelectorAll('*[role=dialog] input[type=checkbox]');

  if (switchers.length === 0) {
    return "There were no switchers."
  }

  let uncheckedAmount = 0;
  switchers.forEach(s => {
    if (s.checked) {
      s.click();
      uncheckedAmount++;
    }
  });
  return `${uncheckedAmount} cookies rejected!`;
}