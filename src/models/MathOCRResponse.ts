import { JsonObject, JsonProperty } from "json2typescript";

import { EmptyString } from "../utils/StringUtil";

@JsonObject
export default class MathOCRResponse {
    @JsonProperty("latex", String, true)
    latex: string = EmptyString;

    @JsonProperty("isError", Boolean, true)
    isError: boolean = false;

    @JsonProperty("errorMessage", String, true)
    errorMessage: string = EmptyString;

    @JsonProperty("timestamp", Number, true)
    timestamp: number = 0;
}
