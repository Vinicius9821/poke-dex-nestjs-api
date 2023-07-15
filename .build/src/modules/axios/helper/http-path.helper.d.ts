export declare class HttpPathHelper {
    static buildFinalPath(path?: string[]): string;
    static hasPath(path?: string[]): boolean;
    static reducePathToBuild(path: string[]): string;
    private static checkCurrentValueFromPath;
    private static checkCurrentValueFromPathIsNullOrEmpty;
}
