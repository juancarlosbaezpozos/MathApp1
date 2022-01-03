import { JsonObject, JsonProperty } from "json2typescript";

import { EmptyString } from "../utils/StringUtil";

import MathSolverTemplateStep from "./MathSolverTemplateStep";

@JsonObject
export default class MathSolverActions {
    @JsonProperty("actionName", String, true)
    actionName: string = EmptyString;

    // LaTeX - Should be rendered using MathJax
    @JsonProperty("solution", String, true)
    solution: string = EmptyString;

    @JsonProperty("templateSteps", [MathSolverTemplateStep], true)
    templateSteps: MathSolverTemplateStep[] = [];

    @JsonProperty("shouldContainSteps", Boolean, true)
    shouldContainSteps: boolean = false;
}