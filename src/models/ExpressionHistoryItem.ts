import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject
export default class ExpressionHistoryItem {

    @JsonProperty("displayLatex", String)
    displayLatex: string = "";

    @JsonProperty("keyboardLatex", String)
    keyboardLatex: string = "";

    @JsonProperty("problemLatex", String)
    problemLatex: string = "";

    // A unique identifier for this object. All other history items with this key should be identical
    get key(): string {
        return this.problemLatex;
    }

    static Construct(problemLatex: string, displayLatex: string, keyboardLatex: string): ExpressionHistoryItem {
        const item = new ExpressionHistoryItem();
        item.displayLatex = displayLatex;
        item.keyboardLatex = keyboardLatex;
        item.problemLatex = problemLatex;
        return item;
    }
}