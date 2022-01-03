import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject
export default class GraphDisplayRange {
    @JsonProperty("minX", Number, true)
    minX: number = -1;

    @JsonProperty("minY", Number, true)
    minY: number = -1;

    @JsonProperty("maxX", Number, true)
    maxX: number = -1;

    @JsonProperty("maxY", Number, true)
    maxY: number = -1;

    // used for the ChartJS display range
    get graphDisplayRange(): string {
        // tslint:disable-next-line:no-multiline-string
        return `rangeMin: {
            x: ${ this.minX * 2 },
            y: ${ this.minY * 2 }
        },
        rangeMax: {
            x: ${ this.maxX * 2 },
            y: ${ this.maxY * 2 }
        }`;
    }

    XAxesTicksMinMaxConfig(multipler: number): string {
        return `max: ${ this.maxX * multipler }, min: ${ this.minX * multipler }`;
    }

    YAxesTicksMinMaxConfig(multipler: number): string {
        return `max: ${ this.maxY * multipler }, min: ${ this.minY * multipler }`;
    }
}