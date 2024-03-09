import { QuotePolicy } from "../../quote/quote.policy";
import { Datatype } from "../datatype/datatype.enum";
import { DatatypePolicy } from "../datatype/datatype.policy";

import { ArgsDto } from "./args.dto";

export class FunctionArgsParser {
  constructor(
    private readonly datatypePolicy: DatatypePolicy,
    private readonly quotePolicy: QuotePolicy
  ) {}

  parse(args_str: string): ArgsDto[] {
    const args_arr = this.clarify(args_str).split("+");

    return args_arr.map<ArgsDto>((arg) => {
      if (this.datatypePolicy.isString(arg)) {
        return new ArgsDto(
          Datatype.String,
          this.quotePolicy.removeGlobalQuotes(arg)
        );
      }

      if (this.datatypePolicy.isNumber(arg)) {
        return new ArgsDto(Datatype.Number, Number(arg));
      }

      return new ArgsDto(Datatype.Variable, arg);
    });
  }

  private clarify(inputString: string) {
    let withinQuotes = false;
    let result = "";

    for (const char of inputString) {
      if (char === "'" || char === '"') {
        withinQuotes = !withinQuotes;
        result += char;
      } else if (char === " " && !withinQuotes) {
        continue; // Skip spaces outside quotes
      } else {
        result += char;
      }
    }

    return result;
  }
}
