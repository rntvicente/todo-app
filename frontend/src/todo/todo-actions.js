export const handleChange = (event) => ({ 
  type: 'DESCRIPTION_CHANGED',
  payload: event.target.value
});
