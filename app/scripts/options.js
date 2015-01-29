'use strict';

function showMessage(msg) {
  var status = document.getElementById('status');
  status.textContent = msg;
  status.style.display = 'inline-block';
  setTimeout(hideMessage, 1750);
}

function hideMessage() {
  var status = document.getElementById('status');
  status.textContent = '';
  status.style.display = 'none';
}

function updateSettings() {
  var opacity = parseFloat(document.getElementById('opacityValue').value, 10);

  if (isNaN(opacity)) {
    showMessage('Invalid transparency value');
    return false;
  }

  if (opacity < 0 || opacity > 1) {
    showMessage('Transparency value should be between 0 and 1');
    return false;
  }

  chrome.storage.sync.set({
    'opacity': opacity.toString()
  }, function () {
    // Update status to let user know options were saved.
    showMessage('Settings saved successfully');
  });

  return false;
}

var updateBtn = document.getElementById('updateBtn');
updateBtn.addEventListener('click', updateSettings);

chrome.storage.sync.get('opacity', function(storage){
	var opacity = storage.opacity;
	document.getElementById('opacityValue').value = opacity;
});