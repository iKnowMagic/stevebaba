function loadPage(page) {
  const AsyncComponent = () => ({
    // The component we want to load.
    component: import(/* webpackChunkName: "page-[request]" */ `@/pages/${page}.vue`),
    // The component to use as a placeholder while the
    // async component is loading.
    // loading: AsyncLoading,
    // The component to render instead if there is an error
    // loading the async component.
    // error: AsyncLoadError,
    // The delay before the loading component is shown.
    delay: 300,
    // If this timeout is reached, the async component is considered
    // to have failed loading.
    timeout: 5000
  })

  return AsyncComponent
}

export { loadPage }
