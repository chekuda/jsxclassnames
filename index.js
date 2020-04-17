export default (...args) => {
  return args.reduce((acc, entry) => {
    if(entry.constructor === Object) {
      return acc.concat(Object.entries(entry).map(([key, val]) => !!val ? key : null))
    }
    return acc.concat(entry ? entry : null)
  }, [])
  .filter(currentClass => !!currentClass)
  .join(' ')
  .trim()
}