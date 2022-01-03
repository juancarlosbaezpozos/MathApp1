import { JsonObject, JsonProperty } from "json2typescript";

import MathSolverGraphData from "./MathSolverGraphData";

@JsonObject
export default class DetailedGraphResponse {
    @JsonProperty("graphData", [MathSolverGraphData], true)
    results: MathSolverGraphData[] = [];
}