import { JsonObject, JsonProperty } from "json2typescript";

import { EmptyString } from "../utils/StringUtil";

import GraphDisplayRange from "./GraphDisplayRange";
import MathSolverCurveData from "./MathSolverCurveData";
import MathSolverRawGraphData from "./MathSolverRawGraphData";

@JsonObject
export default class MathSolverGraphData {
    @JsonProperty("actionName", String, true)
    actionName: string = EmptyString;

    @JsonProperty("graphImageData", String, true)
    graphImageData: string = EmptyString;

    // return for second call
    @JsonProperty("graphExpression", String, true)
    graphExpression: string = EmptyString;

    @JsonProperty("rawGraphData", MathSolverRawGraphData, true)
    rawGraphData?: MathSolverRawGraphData;

    @JsonProperty("displayRange", GraphDisplayRange, true)
    displayRange?: GraphDisplayRange;

    get curveData(): MathSolverCurveData[] {
        return this.rawGraphData ? this.rawGraphData.curveData : [];
    }

    get curveExpressions(): string[] {
        return this.rawGraphData ? this.rawGraphData.curveExpressions : [];
    }

    get key(): string {
        return this.graphExpression;
    }
}