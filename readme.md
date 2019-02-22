# Typescript View Model - API Model demo
---
## WTF is this

This is a small project to show how to encapsulate API Model -> View Model and View Model -> API Model mapping by using classes as something like an aggregate root.

Contained within the `/src/models/organisation` folder is the api and view equivalents of a model, which have classes responsible for their own mapping from and to each other.

## Considerations

The `/src/index.ts` uses JSON-server API calls in `/src/api/organisation.ts`, but it doesn't seem to actually work, so you'll probably have to read it rather than run it.