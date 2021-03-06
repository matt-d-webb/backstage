---
id: auth-backend-classes
title: Auth backend classes
---

## How Does Authentication Work?

The Backstage application can use various authentication providers for
authentication. A provider has to implement an `AuthProviderRouteHandlers`
interface for handling authentication. This interface consists of four methods.
Each of these methods is hosted at an endpoint `/auth/[provider]/method`, where
`method` performs a certain operation as follows:

```
  /auth/[provider]/start -> start
  /auth/[provider]/handler/frame -> frameHandler
  /auth/[provider]/refresh -> refresh
  /auth/[provider]/logout -> logout
```

For more information on how these methods are used and for which purpose, refer
to the documentation [here](oauth.md).

For details on the parameters, input and output conditions for each method,
refer to the type documentation under
`plugins/auth-backend/src/providers/types.ts`.

There are currently two different classes for two authentication mechanisms that
implement this interface: an `OAuthProvider` for [OAuth](https://oauth.net/2/)
based mechanisms and a `SAMLAuthProvider` for
[SAML](http://docs.oasis-open.org/security/saml/Post2.0/sstc-saml-tech-overview-2.0.html)
based mechanisms.

### OAuth mechanisms

Currently OAuth is assumed to be the de facto authentication mechanism for
Backstage based applications.

Backstage comes with a "batteries-included" set of supported commonly used OAuth
providers: Okta, Github, Google, Gitlab, and a generic OAuth2 provider.

All of these use the authorization flow of OAuth2 to implement authentication.

If your authentication provider is any of the above mentioned (except generic
OAuth2) providers, you can configure them by setting the right variables in
`app-config.yaml` under the `auth` section.

### Configuration

Each authentication provider (except SAML) needs five parameters: an OAuth
client ID, a client secret, an authorization endpoint and a token endpoint, and
an app origin. The app origin is the URL at which the frontend of the
application is hosted. This is required because the application opens a popup
window to perform the authentication, and once the flow is completed, the popup
window sends a `postMessage` to the frontend application to indicate the result
of the operation. Also this URL is used to verify that authentication requests
are coming from only this endpoint.

These values are configured via the `app-config.yaml` present in the root of
your app folder.

```
auth:
  providers:
    google:
      development:
        appOrigin: "http://localhost:3000/"
        secure: false
        clientId:
          $secret:
            env: AUTH_GOOGLE_CLIENT_ID
        clientSecret:
          $secret:
            env: AUTH_GOOGLE_CLIENT_SECRET
    github:
      development:
        appOrigin: "http://localhost:3000/"
        secure: false
        clientId:
          $secret:
            env: AUTH_GITHUB_CLIENT_ID
        clientSecret:
          $secret:
            env: AUTH_GITHUB_CLIENT_SECRET
        enterpriseInstanceUrl:
          $secret:
            env: AUTH_GITHUB_ENTERPRISE_INSTANCE_URL
    gitlab:
      development:
        appOrigin: "http://localhost:3000/"
        secure: false
        clientId:
          $secret:
            ...
```

## Technical Notes

### EnvironmentHandler

The concept of an "env" is core to the way the auth backend works. It uses an
`env` query parameter to identify the environment in which the application is
running (`development`, `staging`, `production`, etc). Each runtime can support
multiple environments at the same time and the right handler for each request is
identified and dispatched to based on the `env` parameter. All
`AuthProviderRouteHandlers` are wrapped within an `EnvironmentHandler`.

An `EnvironmentHandler` takes an ID for each provider that it wraps, the
handlers for each env the provider is supported in, and a function that, given a
`Request` as argument, can extract the information about the env under which it
should be processed.

Each provider exposes a factory function `createXProvider` (where X is the name
of the provider) that takes the global config, env and other parameters and
returns an `AuthProviderRouteHandlers` for each env, and an `envIdentifier`
function to identify the env of a request.

For a list of currently available providers, look in the `factories` module
located in `plugins/auth-backend/src/providers/factories.ts`

### OAuth2 provider

The `oauth2` provider abstracts a generic **OAuth2 + OIDC** based authentication
provider. What this means is that after the application has been given
permission by the user, the `authorization code` will be exchanged for an
`access_token`, a `refresh_token` and an `id_token`. This `id_token` is used to
obtain an email id of the user, which is then used for creating the session.
