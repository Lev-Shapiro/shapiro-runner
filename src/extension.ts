// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { Compiler } from "./compiler/compiler";
import { CompilerMemory } from "./compiler/compiler.memory";
import { DatatypePolicy } from "./compiler/parsers/datatype/datatype.policy";
import { FunctionArgsParser } from "./compiler/parsers/func-args/function-args.parser";
import { ReassignParser } from "./compiler/parsers/reassign/ressign.parser";
import { RenderParser } from "./compiler/parsers/render/render.parser";
import { VariableParser } from "./compiler/parsers/variable/variable.parser";
import { VariablePolicy } from "./compiler/parsers/variable/variable.policy";
import { QuotePolicy } from "./compiler/quote/quote.policy";
import { ProjectReader } from "./project-reader/project-reader";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "shapiro-runner" is now active!'
  );

  const reader = new ProjectReader();

  const compilerMemory = new CompilerMemory();

  const variablePolicy = new VariablePolicy();
  const variableParser = new VariableParser(variablePolicy);

  const quotePolicy = new QuotePolicy();
  const datatypePolicy = new DatatypePolicy(quotePolicy);

  const argsParser = new FunctionArgsParser(datatypePolicy, quotePolicy);

  const renderParser = new RenderParser(argsParser);

  const reassignParser = new ReassignParser();

  const compiler = new Compiler(
    compilerMemory,
    variableParser,
    renderParser,
    reassignParser
  );

  //Create output channel
  const mainConsole = vscode.window.createOutputChannel("Shapiro Language");

  compiler.setConsole(mainConsole.appendLine);

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  const disposable = vscode.commands.registerCommand(
    "shapiro-runner.runshapiro",
    async () => {
      mainConsole.clear();

      try {
        // const fileContent = reader.getContent("main.shapiro");

        // The code you place here will be executed every time your command is executed
        // Display a message box to the user

        const main = async () => {
          console.log("Started Extension");

          const mainFile = (
            await vscode.workspace.findFiles("**/main.shapiro")
          )[0];

          const content = reader.getContent(mainFile.fsPath);

          compiler.read(content);
        };

        await main();
      } catch (err) {
        vscode.window.showInformationMessage("Something went wrong...");
      }
    }
  );

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
