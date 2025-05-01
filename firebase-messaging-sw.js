importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyB1ElhmXnWKT0GY3L0UZPXdTv3Y-g52XPs",
  projectId: "vivencia-il",
  messagingSenderId: "381872088752",
  appId: "1:381872088752:web:1ba32042c0fadfb114bd75",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("[firebase-messaging-sw.js] Received background message ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/icon.png",
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
