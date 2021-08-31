## My own jsxclassnames

A light helper to generate your react classes dynamically.

## How to use it

The helper will receive a number|string|obj|array|undefined|null and will return all the truthy properties.

**Component**

  ```jsx
  import jsxclassnames from 'jsxclassnames'

  <div
    className={jsxclassnames(
      { 'test--one': true, 'other-class': 0 },
      'myclass',
      ['myotherclass', current === id],
      })}
    />
  ```

**Component rendered**

```jsx
   <div class="test--one myclass myotherclass"></div>
```
