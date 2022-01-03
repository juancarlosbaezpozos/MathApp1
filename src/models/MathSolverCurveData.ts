import { JsonObject, JsonProperty } from "json2typescript";

import { EmptyString } from "../utils/StringUtil";

import MathSolverPointGroup from "./MathSolverPointGroup";

@JsonObject
export default class MathSolverCurveData {
    @JsonProperty("pointGroups", [MathSolverPointGroup], true)
    pointGroups: MathSolverPointGroup[] = [];

    // latex to render the equation
    @JsonProperty("curveExpression", String, true)
    curveExpression: string = EmptyString;
}