export class HttpBaseUrlHelper {
  private static hasSlashInBaseUrl(baseUrl: string): boolean {
    return baseUrl.endsWith('/');
  }

  static removeSlashFromBaseUrl(baseUrl: string): string {
    if (this.hasSlashInBaseUrl(baseUrl)) {
      return baseUrl.substring(0, baseUrl.length - 1);
    }

    return baseUrl;
  }
}
