export const authConfig = {
  authority: "http://localhost:9011", // FusionAuth
  client_id: "3836e003-e494-49f5-b60e-cd1d071709da",        // Replace with real one
  redirect_uri: "http://localhost:5173/callback",
  post_logout_redirect_uri: "http://localhost:5173",
  response_type: "code",
  scope: "openid offline_access profile email",
};
