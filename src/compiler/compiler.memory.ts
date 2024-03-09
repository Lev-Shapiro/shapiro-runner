import { ReassignDto } from "./parsers/reassign/reassign.dto";
import { VariableDto } from "./parsers/variable/variable.dto";

export class CompilerMemory {
  variables: { [name: string]: VariableDto<string | number> } = {};

  save(variableDto: VariableDto<string | number>) {
    this.variables[variableDto.name] = variableDto;
  }

  reassign(reassignDto: ReassignDto) {
    this.variables[reassignDto.name].assign(reassignDto.value);
  }

  get(name: string) {
    return this.variables[name];
  }
}
