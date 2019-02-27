export const FILTER_CHANGE = 'FILTER_CHANGE'
export const FILTER_CHANGE_APPLY = 'FILTER_CHANGE_APPLY'
export const FILTER_RESET = 'FILTER_RESET'

export const changeFilter = filters => ({
  type: FILTER_CHANGE,
  filters,
})
