# How's it going?

*This repo is a workshop for me to try out different ways to build JS web-apps*

See: *hot-water & test-plate*

## TODOS
- server methods
- browserify
- Viewport stuff
- Also borderbox around the whole damn app thing
- graphQL


### Server Methods:
- You define all of them
- Define one:
    ```
    const addMethod = (x, y) => x + y

    server.method({
      name: 'add',
      method: addMethod,
      options: {}
    })
    ```
- Or, pass an array of method Objects:
  ```
  server.method([add, delete, edit...])
  ```
  Not from docs, my own interpretation

About method-keys

- *Your server method function should return a valid result or throw an error if one occurs.*
- options.cashe, options.generateKey, options.bind

----

## Packages :)

### Hapi:
- Realise that I only ever use Expressjs as my server framework
- Ask google: "server frameworks like expressjs"
- Find Hapi
- Had nice docs and had their own Pino module, it was an easy sell

### Eslint:
- I'm sad when I can't find the config settings for a rule, here are a bunch of rules
- https://github.com/eslint/eslint/issues/9486
- Future joe: if you find a better place to look for custom rule config, you WRITE IT DOWN

