export function toISODate(date8: string) {
  return `${date8.slice(0, 4)}-${date8.slice(4, 6)}-${date8.slice(6, 8)}`
}
