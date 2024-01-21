 export const isEmpty =(value)=> (
    value === undefined || value === null || (typeof value === 'object' && Object.values(value)[0] === Object.values(value)[1]
  ) || (typeof value === 'string' && value.trim().length === 0));
 