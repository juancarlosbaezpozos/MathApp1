import { JsonObject, JsonProperty } from "json2typescript";

import MathSolverActions from "./MathSolverActions";
import MathSolverGraphData from "./MathSolverGraphData";

@JsonObject
export default class MathSolverResponse {
    @JsonProperty("problem", String, true)
    problem: string = "";

    @JsonProperty("problemCategory", String, true)
    problemCategory: string = "";

    @JsonProperty("isError", Boolean, true)
    isError: boolean = false;

    @JsonProperty("errorCode", Number, true)
    errorCode: number = -1;

    @JsonProperty("errorMessage", String, true)
    errorMessage: string = "";

    @JsonProperty("actions", [MathSolverActions], true)
    actions: MathSolverActions[] = [];

    @JsonProperty("allGraphData", [MathSolverGraphData], true)
    allGraphData: MathSolverGraphData[] = [];

    @JsonProperty("bingWebAnswerUrl", String, true)
    bingWebAnswerUrl: string = "";

    @JsonProperty("keyboardLatexInput", String, true)
    keyboardLatexInput: string = "";

    @JsonProperty("hasBingWebAnswer", Boolean, true)
    hasBingWebAnswer: boolean = false;

    @JsonProperty("bingWebAnswerHeading", String, true)
    bingWebAnswerHeading: string = "";

    @JsonProperty("shouldContainGraphs", Boolean, true)
    shouldContainGraphs: boolean = false;

    @JsonProperty("detectedLatex", String, true)
    detectedLatex: string = "";
}