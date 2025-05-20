importScripts("https://www.gstatic.com/firebasejs/10.12.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.1/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyAjIJ5-AUvGJLVCwF0o1u6Od2WhUTE29Ho",
  authDomain: "pauza-dating.firebaseapp.com",
  projectId: "pauza-dating",
  messagingSenderId: "907066631258",
  appId: "1:907066631258:web:ba63fe386da72f57d2a463",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("[firebase-messaging-sw.js] Received background message ", payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: '/logo.png', // אם יש אייקון
  });
});
