import type { NewArticle } from './interfaces/Article'

const getNameErrorMessage = (name: string) => {
  if (name === '') {
    return 'Champ requis'
  }
  if (name.length > 10) {
    return `Champ trop long (${name.length}>10)`
  }
}
const getPriceErrorMessage = (price: number) => {
  if (price < 0) {
    return 'Le prix doit être positif'
  }
}
const getQtyErrorMessage = (qty: number) => {
  if (!Number.isInteger(qty)) {
    return 'La quantité doit être un entier'
  }
  if (qty < 0) {
    return 'La quantité doit être positive'
  }
}

export const getNewArticleValidationObject = (newArticle: NewArticle) => {
  return {
    name: getNameErrorMessage(newArticle.name),
    price: getPriceErrorMessage(newArticle.price),
    qty: getQtyErrorMessage(newArticle.qty)
  }
}

export const isFormInvalid = (object: Object): boolean => {
  for (const value of Object.values(object)) {
    if (value) {
      return true
    }
  }
  return false
}
