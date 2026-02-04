export const demoGalleryImages = [
  "/ClassMeet.jpeg",
  "/P5.jpeg",
  "/Welcome.png",
  "/LogoTKJ3.png",
  "/Background.jpeg",
];

export const demoRequestImages = [
  { url: "/Request.png", timestamp: new Date().toISOString() },
  { url: "/avatar.png", timestamp: new Date(Date.now() - 3600 * 1000).toISOString() },
  { url: "/AnonimUser.png", timestamp: new Date(Date.now() - 2 * 3600 * 1000).toISOString() },
];

export const demoChatMessages = [
  {
    message: "Selamat datang! Ini mode demo untuk mencoba chat.",
    sender: { image: "/AnonimUser.png" },
    timestamp: new Date().toISOString(),
    userIp: "demo",
  },
];
