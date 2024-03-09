import { CompilerMemory } from "./compiler.memory";
import { Datatype } from "./parsers/datatype/datatype.enum";
import { ReassignParser } from "./parsers/reassign/ressign.parser";
import { RenderParser } from "./parsers/render/render.parser";
import { VariableParser } from "./parsers/variable/variable.parser";

export class Compiler {
  log = console.log;

  setConsole(func: (msg: string) => void) {
    this.log = func;
  }

  constructor(
    public readonly memory: CompilerMemory,
    private readonly variableParser: VariableParser,
    private readonly renderParser: RenderParser,
    private readonly reassignParser: ReassignParser
  ) {}

  private getLines(content: string) {
    return content.split("\n").filter((line) => line.length);
  }

  private readLine(line: string) {
    if (this.variableParser.hasKeyword(line)) {
      const variableDto = this.variableParser.parse(line);

      this.memory.save(variableDto);
    }

    if (this.renderParser.hasKeyword(line)) {
      this.parseConsole(line);
    }

    if (this.reassignParser.hasKeyword(line)) {
      const reassignParser = this.reassignParser.parse(line);

      try {
        this.memory.reassign(reassignParser);
      } catch (err: any) {
        this.log(err);

        throw new Error(err);
      }
    }
  }

  read(content: string) {
    const lines = this.getLines(content);

    for (const line of lines) {
      this.readLine(line);
    }
  }

  private parseConsole(data: string) {
    const args = this.renderParser.parse(data);

    const ready_args = args.map((arg) => {
      if (arg.type === Datatype.Variable) {
        const variable = this.memory.get(arg.value as string);

        if (!variable) {
          this.log("ERROR: Variable Not Found");
          throw new Error("Variable not found");
        }

        return variable.value;
      }

      if (arg.type === Datatype.String) {
        return `"${arg.value}"`;
      }

      return arg.value;
    });

    const text = eval(ready_args.join("+")) as string;

    this.log(text);
  }
}
