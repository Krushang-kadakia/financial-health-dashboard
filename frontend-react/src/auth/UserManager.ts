import { UserManager } from "oidc-client-ts";
import { authConfig } from "./config";

export const userManager = new UserManager(authConfig);
