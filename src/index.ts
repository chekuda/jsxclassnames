export default (...args: any) => {
  return args.reduce((acc: any[], entry: any) => {
    if(entry.constructor === Object) {
      return acc.concat(Object.entries(entry).map(([key, val]) => !!val ? key : null))
    }
    return acc.concat(entry ? entry : null)
  }, [])
  .filter((currentClass: any) => !!currentClass)
  .join(' ')
  .trim()
}