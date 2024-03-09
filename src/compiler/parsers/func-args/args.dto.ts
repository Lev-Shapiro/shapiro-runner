import { Datatype } from "../datatype/datatype.enum";

export class ArgsDto<T extends Datatype = Datatype> {
  constructor(
    public readonly type: T,
    public readonly value: T extends Datatype.String
      ? string
      : T extends Datatype.Number
      ? number
      : T extends Datatype.Variable
      ? string
      : never
  ) {}
}
