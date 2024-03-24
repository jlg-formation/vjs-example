import type { NewArticle } from './interfaces/Article'

export const newArticleValidate = (fieldName: string, newArticle: NewArticle) => {
  if (fieldName === 'name') {
    if (newArticle.name === '') {
      return 'Champ requis'
    }
    if (newArticle.name.length > 10) {
      return `Champ trop long (${newArticle.name.length}>10)`
    }
  }
  if (fieldName === 'price') {
    if (newArticle.price < 0) {
      return 'Le prix doit être positif'
    }
  }
  if (fieldName === 'qty') {
    if (!Number.isInteger(newArticle.qty)) {
      return 'La quantité doit être un entier'
    }
    if (newArticle.qty < 0) {
      return 'La quantité doit être positive'
    }
  }
  return ''
}
