import { JsonObject, JsonProperty } from "json2typescript";

import { Comma, EmptyString } from "../utils/StringUtil";

@JsonObject
export default class Step {
    @JsonProperty("hint", String, true)
    hint: string = EmptyString;

    @JsonProperty("step", String, true)
    step: string = EmptyString;

    @JsonProperty("expression", String, true)
    expression: string = EmptyString;

    @JsonProperty("prevExpression", String, true)
    prevExpression: string = EmptyString;

    GetDebugViewString(): string {
        return "Hint: " + this.hint + Comma
            + "Step: " + this.step + Comma
            + "Expression: " + this.expression
            + "prevExpression: " + this.prevExpression;
    }
}