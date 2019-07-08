const registerServiceWorker = () => {
  if (navigator.serviceWorker && process.env.NODE_ENV === 'production') {
    window.onload = async () => {
      try {
        await navigator.serviceWorker.register('/serviceWorker.js')
      } catch (error) {}
    }
  }
}


export default registerServiceWorker