import * as fs from "fs";

export class ProjectReader {
  getContent(path: string) {
    try {
      const content = fs.readFileSync(path, "utf8");
      return content;
    } catch (error: any) {
      throw new Error(`Error reading file: ${error.message}`);
    }
  }
}
