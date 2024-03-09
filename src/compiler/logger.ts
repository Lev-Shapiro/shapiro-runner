export abstract class Logger {
  constructor(
    private readonly log: (msg: string) => void,
    private readonly errorLog: (msg: string) => void
  ) {}
}
