import { FunctionArgsParser } from "../func-args/function-args.parser";

export class RenderParser {
  constructor(private readonly argsParser: FunctionArgsParser) {}

  parse(line: string) {
    if (!this.hasKeyword(line)) {
      throw new Error("Render Parser parses only render function");
    }

    const args_str = line.substring(
      line.indexOf("(") + 1,
      line.lastIndexOf(")")
    );

    return this.argsParser.parse(args_str);
  }

  hasKeyword(line: string) {
    return line.includes("render");
  }
}
