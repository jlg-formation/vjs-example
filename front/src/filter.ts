export const useFilters = () => {
  const currency = (value: number) => {
    const formatter = new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    })
    const result = formatter.format(value)
    console.log('result: ', result)
    return result
  }
  return { currency }
}
