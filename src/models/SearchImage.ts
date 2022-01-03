import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject
export default class SearchImage {
    @JsonProperty("name", String, true)
    name: string = "";

    @JsonProperty("thumbnailUrl", String, true)
    thumbnailUrl: string = "";

    @JsonProperty("sourceWidth", Number, true)
    sourceWidth: number = 1;

    @JsonProperty("sourceHeight", Number, true)
    sourceHeight: number = 1;
}