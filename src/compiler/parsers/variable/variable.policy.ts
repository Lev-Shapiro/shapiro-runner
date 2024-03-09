import { Variable } from "./variable.enum";

export class VariablePolicy {
  getType(type: string) {
    switch (type) {
      case Variable.BasedConst:
        return Variable.BasedConst;
      case Variable.FactConst:
        return Variable.FactConst;
      case Variable.Feeling:
        return Variable.Feeling;
      default:
        throw new Error("Invalid variable type");
    }
  }
}
