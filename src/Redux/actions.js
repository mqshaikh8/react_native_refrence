export const infoDivDecider = (religion) => {
    return {
      type: "infoDivDecider",
      payload: religion
    }
  }
  export const religiousInfo = (info) => {
    return {
      type: "religiousInfo",
      payload: info
    }
  }
  export const article = (info) => {
    return {
      type: "article",
      payload: info
    }
  }
  export const articleId = (id) => {
    return {
      type: "id",
      payload: id
    }
  }
  
  