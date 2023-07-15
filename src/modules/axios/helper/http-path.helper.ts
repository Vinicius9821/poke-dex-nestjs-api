import { AxiosException } from '../exception/axios-exception.model';

export class HttpPathHelper {
  static buildFinalPath(path?: string[]): string {
    if (this.hasPath(path)) {
      return this.reducePathToBuild(path as string[]);
    }

    return '';
  }

  static hasPath(path?: string[]): boolean {
    return path !== undefined && path?.length > 0;
  }

  static reducePathToBuild(path: string[]): string {
    return path?.reduce((buildPath, currentValue) => {
      this.checkCurrentValueFromPath(currentValue);

      if (!currentValue.startsWith('/')) {
        currentValue += '/';
      }
      if (currentValue.endsWith('/')) {
        currentValue = currentValue.substring(0, currentValue.length - 1);
      }
      return buildPath + '/' + currentValue;
    }, '');
  }

  private static checkCurrentValueFromPath(currentValue?: string): void {
    if (this.checkCurrentValueFromPathIsNullOrEmpty(currentValue)) {
      throw new AxiosException().withMessage(
        'current value cannot be null or empty',
      );
    }
  }

  private static checkCurrentValueFromPathIsNullOrEmpty(
    currentValue?: string,
  ): boolean {
    if (!currentValue) {
      return true;
    }

    return false;
  }
}
