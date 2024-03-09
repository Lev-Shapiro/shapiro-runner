import { splitBySpaceInGlobalScope } from "../../../tools/split-global-scope";
import { ReassignDto } from "./reassign.dto";

export class ReassignParser {
  parse(line: string) {
    if (!this.hasKeyword(line)) {
      throw new Error("Reassign Parser parses only reassignment keywords");
    }

    // Example: based a is 5
    const [_, name, __, value_str] = splitBySpaceInGlobalScope(line);

    const valueNumber = Number(value_str);

    const value = isNaN(valueNumber) ? value_str : valueNumber;

    return new ReassignDto(name, value);
  }

  hasKeyword(line: string) {
    return line.includes("actually");
  }
}
