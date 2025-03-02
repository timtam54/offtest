const cacheName = "my-cool-cache-v1";
const filesToCache = [
  "/",
  // etc
];

const installEvent = () => {
  self.addEventListener("install", (event) => {
    event.waitUntil(
      caches
        .open(cacheName)
        .then((cache) => {
          console.log("caching files");
          cache.addAll(filesToCache);
        })
        .then(() => self.skipWaiting())
    );
  });
};
installEvent();

const activateEvent = () => {
  self.addEventListener("activate", (event) => {
    event.waitUntil(
      caches.keys().then((keyList) => {
        return Promise.all(
          keyList.map((key) => {
            if (key !== cacheName) {
              return caches.delete(key);
            }
          })
        );
      })
    );
    return self.clients.claim();
  });
};
activateEvent();