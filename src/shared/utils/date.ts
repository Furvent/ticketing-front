export const sortDateArray = (dates: string[]) => {
  dates.sort((dateA: string, dateB: string) => {
    return (new Date(dateA).getTime()) - (new Date(dateB).getTime());
  })
}