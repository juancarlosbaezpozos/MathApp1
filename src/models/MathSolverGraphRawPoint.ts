import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject
export default class MathSolverGraphRawPoint {
    @JsonProperty("x", Number, true)
    x: number = 0;

    @JsonProperty("y", Number, true)
    y: number = 0;

    get graphPointObjectString(): string {
        return JSON.stringify(this);
    }
}