
const preactConfig = {
  prerender: {
    enabled: true,
    renderTarget: '#app',
    additionalPrerenderRoutes: ['/404'],
  },
  
}

export { preactConfig };