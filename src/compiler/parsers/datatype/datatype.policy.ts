import { QuotePolicy } from "../../quote/quote.policy";

export class DatatypePolicy {
  constructor(private readonly quotePolicy: QuotePolicy) {}

  isVariable(text: string) {
    return !(this.isString(text) || this.isNumber(text));
  }

  isString(text: string) {
    return this.quotePolicy.isString(text);
  }

  isNumber(text: string) {
    return !isNaN(Number(text));
  }
}
