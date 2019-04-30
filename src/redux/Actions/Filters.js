export const FILTER_CHANGE = 'filter/FILTER_CHANGE'
export const FILTER_CHANGE_APPLY = 'filter/FILTER_CHANGE_APPLY'
export const FILTER_RESET = 'filter/FILTER_RESET'

export const changeFilter = filters => ({
  type: FILTER_CHANGE,
  filters,
})
