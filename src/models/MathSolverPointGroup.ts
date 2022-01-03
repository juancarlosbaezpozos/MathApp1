import { JsonObject, JsonProperty } from "json2typescript";

import { EmptyString } from "../utils/StringUtil";

import MathSolverGraphRawPoint from "./MathSolverGraphRawPoint";

@JsonObject
export default class MathSolverPointGroup {
    @JsonProperty("points", [MathSolverGraphRawPoint], true)
    points: MathSolverGraphRawPoint[] = [];

    @JsonProperty("groupType", String, true)
    groupType: string = EmptyString;
}