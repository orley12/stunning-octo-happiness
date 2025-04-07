export class DateTimeUtil {
  static toHumanReadableDate(timestamp: number): string {
    const date = new Date(timestamp)

    return date.toLocaleString()
  }
}
