import { splitBySpaceInGlobalScope } from "../../../tools/split-global-scope";
import { VariableDto } from "./variable.dto";
import { Variable } from "./variable.enum";
import { VariablePolicy } from "./variable.policy";

export class VariableParser {
  constructor(private variablePolicy: VariablePolicy) {}

  parse(line: string) {
    if (!this.hasKeyword(line)) {
      throw new Error("Variable Parser parses only variables");
    }

    // Example: based a is 5
    const [type_str, name, _, value_str] = splitBySpaceInGlobalScope(line);

    const type = this.variablePolicy.getType(type_str);

    const valueNumber = Number(value_str);

    const value = isNaN(valueNumber) ? value_str : valueNumber;

    return new VariableDto(name, type, value);
  }

  hasKeyword(line: string): boolean {
    return (
      line.includes(Variable.Feeling) ||
      line.includes(Variable.BasedConst) ||
      line.includes(Variable.FactConst)
    );
  }
}
