export const selectIsLoggedIn = (state) => state.auth.isSignedIn;

export const selectUser = (state) => state.auth.userData;

export const selectIsRefreshing = (state) => state.auth.isRefreshing;
