# login-app

## Set up

```console
$ npm ci
$ npx lerna bootstrap
```

And prepare followings:

- `packages/app/.env.local`
- `packages/app/.firebaserc`

## Start

You'll need two terminal windows.

```console
$ npx lerna run dev:firebase
```

```console
$ npm run dev
```

Because `firebase emulators:exec` is unstable unfortunately.
