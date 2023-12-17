// app.js
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
        .then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(error => {
            console.error('Service Worker registration failed:', error);
        });
}

// Check if the user is offline
function isOffline() {
    return !navigator.onLine;
}

// Display the offline page
function showOfflinePage() {
    fetch('offline.html')
        .then(response => response.text())
        .then(html => {
            document.body.innerHTML = html;
        })
        .catch(error => {
            console.error('Error fetching offline page:', error);
        });
}

// Check if the user is offline and show the offline page
if (isOffline()) {
    showOfflinePage();
}
