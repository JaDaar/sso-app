import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer: 'https://idsvr4.azurewebsites.net',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/index.html',

  // The SPA's id. The SPA is registerd with this id at the auth-server
  // clientId: 'server.code',
  clientId: 'spa',

  // Just needed if your auth server demands a secret. In general, this
  // is a sign that the auth server is not configured with SPAs in mind
  // and it might not enforce further best practices vital for security
  // such applications.
  // dummyClientSecret: 'secret',

  responseType: 'code',

  // set the scope for the permissions the client should request
  // The first four are defined by OIDC.
  // Important: Request offline_access to get a refresh token
  // The api scope is a usecase specific one
  scope: 'openid profile email offline_access api',

  showDebugInformation: true,

  /*
  app.component.ts:19 PLEASE READ THIS CAREFULLY:

Beginning with angular-oauth2-oidc version 9, the JwksValidationHandler
has been moved to an library of its own. If you need it for implementing
OAuth2/OIDC **implicit flow**, please install it using npm:

  npm i angular-oauth2-oidc-jwks --save

After that, you can import it into your application:

  import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';

Please note, that this dependency is not needed for the **code flow**,
which is nowadays the **recommented** one for single page applications.
This also results in smaller bundle sizes.
*/
};
