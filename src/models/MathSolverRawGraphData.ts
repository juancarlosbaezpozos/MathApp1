import { JsonObject, JsonProperty } from "json2typescript";

import MathSolverCurveData from "./MathSolverCurveData";

@JsonObject
export default class MathSolverRawGraphData {
    @JsonProperty("curveData", [MathSolverCurveData], true)
    curveData: MathSolverCurveData[] = [];

    get curveExpressions(): string[] {
        return this.curveData.map(data => data.curveExpression);
    }
}