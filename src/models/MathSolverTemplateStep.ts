import { JsonObject, JsonProperty } from "json2typescript";

import { EmptyString } from "../utils/StringUtil";

import MathSolverStep from "./MathSolverStep";

@JsonObject
export default class MathSolverTemplateStep {
    @JsonProperty("templateName", String, true)
    templateName: string = EmptyString;

    @JsonProperty("steps", [MathSolverStep], true)
    steps: MathSolverStep[] = [];

    get templateNameClean(): string {
        let clean = this.templateName;
        // let clean = this.templateName.replace("Steps Using", "").trim();
        clean = clean[0].toLocaleUpperCase() + clean.slice(1);
        return clean;
    }
}