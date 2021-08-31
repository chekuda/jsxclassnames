export default (...args: any) => {
  return args.reduce((acc: any[], entry: any) => {
    if(entry.constructor === Object) {
      return acc.concat(Object.entries(entry).map(([key, val]) => !!val && !acc.includes(key) ? key : null))
    }else if(Array.isArray(entry)) {
      return acc.concat(entry.filter(ele => !acc.includes(ele)))
    }
    return acc.concat(entry ? entry : null)
  }, [])
  .filter((currentClass: any) => !!currentClass)
  .join(' ')
  .trim()
}