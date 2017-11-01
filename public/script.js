'use strict';

window.onload = () => {

  const scoreCell = document.getElementsByClassName('score-cell');
  const recentIcon = document.getElementById('recent-icon');
  const allTimeIcon = document.getElementById('all-time-icon');

  [...scoreCell].forEach(cell => {
    cell.onclick = () => {
      if (recentIcon.classList.contains('hidden')) {
        recentIcon.classList.remove('hidden');
        allTimeIcon.classList.add('hidden');
      } else if (allTimeIcon.classList.contains('hidden')) {
        recentIcon.classList.add('hidden');
        allTimeIcon.classList.remove('hidden');
      }
    };
  });
};
