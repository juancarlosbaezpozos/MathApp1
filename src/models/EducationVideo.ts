import { JsonObject, JsonProperty } from "json2typescript";

import { EmptyString } from "../utils/StringUtil";

import SearchImage from "./SearchImage";

@JsonObject
class EducationVideo {
    @JsonProperty("name", String, true)
    name: string = EmptyString;

    @JsonProperty("description", String, true)
    description: string = EmptyString;

    @JsonProperty("url", String, true)
    url: string = EmptyString;

    @JsonProperty("publisher", String, true)
    publisher: string = EmptyString;

    @JsonProperty("thumbnail", SearchImage, true)
    thumbnail?: SearchImage;
}

export default EducationVideo;