export const checkId = (selectedIds: number[], objectId: number): boolean => {
  if (selectedIds.find(selectedId => selectedId === objectId)) return true
  return false
}
