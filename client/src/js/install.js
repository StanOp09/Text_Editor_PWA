// const butInstall = document.getElementById('buttonInstall');

// // Logic for installing the PWA
// // TODO: Add an event handler to the `beforeinstallprompt` event
// window.addEventListener('beforeinstallprompt', (event) => {});

// // TODO: Implement a click event handler on the `butInstall` element
// butInstall.addEventListener('click', async () => {});

// // TODO: Add an handler for the `appinstalled` event
// window.addEventListener('appinstalled', (event) => {});

// ********

const butInstall = document.getElementById('buttonInstall');

// let deferredPrompt; // Store the deferred prompt for later use

// Logic for installing the PWA

// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default browser prompt
  // event.preventDefault();
  // Store the event for later use
  window.deferredPrompt = event;
  // Show the install button or perform other actions to notify the user
  butInstall.classList.toggle ('hidden', false);
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  const alertEvent = window.defferedPrompt;

  if (!alertEvent) {
    return;
  }

  alertEvent.prompt();

  window.deferredPrompt = null;

  butInstall.classList.toggle('hidden', true);
});
//   if (deferredPrompt) {
//     // Show the browser's install prompt
//     deferredPrompt.prompt();
//     // Wait for the user's choice
//     const choiceResult = await deferredPrompt.userChoice;
//     // Reset the deferred prompt variable
//     deferredPrompt = null;
//     // Hide the install button
//     butInstall.style.display = 'none';

//     if (choiceResult.outcome === 'accepted') {
//       console.log('User accepted the PWA installation');
//     } else {
//       console.log('User declined the PWA installation');
//     }
//   }
// });

// Add a handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('PWA was installed on the device');
  // You can perform additional actions if needed
  window.defferedPrompt = null;
});
