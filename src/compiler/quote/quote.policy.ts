import { Quote } from "./quote.enum";

export class QuotePolicy {
  includesQuote(text: string) {
    return text.includes(Quote.Single) || text.includes(Quote.Double);
  }

  isQuote(text: string) {
    return text === Quote.Single || text === Quote.Double;
  }

  isString(text: string) {
    const firstQuote = this.findFirstQuote(text);

    return (
      firstQuote !== Quote.NotString &&
      !(text.indexOf(firstQuote) === text.lastIndexOf(firstQuote))
    );
  }

  removeGlobalQuotes(text: string) {
    const firstQuote = this.findFirstQuote(text);

    if (firstQuote === Quote.NotString) {
      throw new Error("You can't perform .removeGlobalQuotes not on a string");
    }

    return this.retrieveQuoteContent(text, firstQuote);
  }

  private retrieveQuoteContent(text: string, q: Quote) {
    if (q === Quote.NotString) {
      throw new Error(
        "This function must have a certain quote selected to search for"
      );
    }

    return text.substring(text.indexOf(q) + 1, text.lastIndexOf(q));
  }

  private findFirstQuote(text: string) {
    const sindex = text.indexOf(Quote.Single);
    const dindex = text.indexOf(Quote.Double);

    if (sindex === -1 && dindex === -1) {
      return Quote.NotString;
    }

    if (sindex !== -1 && sindex < dindex) {
      return Quote.Single;
    }

    return Quote.Double;
  }
}
