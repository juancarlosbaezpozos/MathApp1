import { JsonObject, JsonProperty } from "json2typescript";

import { EmptyString } from "../utils/StringUtil";

import SearchImage from "./SearchImage";

@JsonObject
export default class ConceptEntity {
    @JsonProperty("name", String, true)
    name: string = EmptyString;

    @JsonProperty("description", String, true)
    description: string = EmptyString;

    @JsonProperty("url", String, true)
    url: string = EmptyString;

    @JsonProperty("satoriID", String, true)
    satoriID: string = EmptyString;

    @JsonProperty("image", SearchImage, true)
    image?: SearchImage;
}
