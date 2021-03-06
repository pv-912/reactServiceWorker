importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');

var config = {
    apiKey: "AIzaSyBQ2J-GhmuI53R8NpSZmVzwnKis0Q942l8",
    authDomain: "pushnotification-97c8d.firebaseapp.com",
    databaseURL: "https://pushnotification-97c8d.firebaseio.com",
    projectId: "pushnotification-97c8d",
    storageBucket: "",
    messagingSenderId: "312632419493"
  };

firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon,        
    };
  
    return self.registration.showNotification(notificationTitle, notificationOptions);
  });
  