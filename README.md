## My own jsxclassnames

  The function will receive string|obj|array and will return all the truthy properties.

  ```

  import jsxclassnames from 'jsxclassnames'

  <div
    className={jsxclassnames({
      'test--one': true,
      'myclass',
      undefined,
      ['myotherclass', undefined],
      [test]: current === id
      })}
    />

    // Output => class="test--one myclass myotherclass test"
  ```
