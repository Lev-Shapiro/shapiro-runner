import { Variable } from "./variable.enum";

export class VariableDto<T extends string | number> {
  private isConstant: boolean = false;

  constructor(
    public readonly name: string,
    public readonly type: Variable,
    public scoped_value: T
  ) {
    if (type === Variable.BasedConst || type === Variable.FactConst) {
      this.isConstant = true;
    }
  }

  get value(): T {
    return this.scoped_value;
  }

  assign(value: T) {
    if (this.isConstant) {
      throw new Error("Cannot assign to constant variable");
    }

    this.scoped_value = value;
  }
}
