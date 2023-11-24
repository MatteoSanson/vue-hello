const { createApp } = Vue

  createApp({
    data() {
      return {
        title: 'Hello Vue!',
        immagineUrl: "https://picsum.photos/600/300",
        immagineAlt: "immagine random 600x300"
      }
    }
  }).mount('#app')