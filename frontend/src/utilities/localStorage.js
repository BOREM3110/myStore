export const loadCategories = () => {
  const serializedCat = localStorage.getItem("categories");
  if(serializedCat === null) {
      return undefined  
  } 
    return JSON.parse(serializedCat);
  
};

export const saveCategories = (categories) => {
  const serializedCat = JSON.stringify( categories);
localStorage.setItem("categories", serializedCat);
  
}