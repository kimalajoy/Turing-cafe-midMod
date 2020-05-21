export const getReservations = async () => {
  const response = await fetch('http://localhost:3001/api/v1/reservations')
  const data = await response.json()
  return data
}