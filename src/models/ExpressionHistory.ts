import { JsonObject, JsonProperty } from "json2typescript";

import ExpressionHistoryItem from "./ExpressionHistoryItem";

@JsonObject
export default class ExpressionHistory {
    @JsonProperty("items", [ExpressionHistoryItem])
    items: ExpressionHistoryItem[] = [];
}