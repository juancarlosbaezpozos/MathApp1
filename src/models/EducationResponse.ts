import { JsonObject, JsonProperty } from "json2typescript";

import ConceptEntity from "./ConceptEntity";
import EducationVideo from "./EducationVideo";
import MathSolverGraphData from "./MathSolverGraphData";
import MathSolverResponse from "./MathSolverResponse";

@JsonObject
export default class EducationResponse {

    @JsonProperty("mathSolverResult", MathSolverResponse, true)
    mathSolverResult?: MathSolverResponse;

    @JsonProperty("errorMessage", String, true)
    errorMessage: string = "";

    @JsonProperty("isError", Boolean, true)
    isError: boolean = false;

    @JsonProperty("entities", [ConceptEntity], true)
    entities: ConceptEntity[] = [];

    @JsonProperty("videos", [EducationVideo], true)
    videos: EducationVideo[] = [];

    @JsonProperty("generatedEquations", [String], true)
    generatedEquations: string[] = [];

    HasGraph(): boolean {
        return this.mathSolverResult
            && this.mathSolverResult.allGraphData
            && this.mathSolverResult.allGraphData.length > 0
            ? true : false;
    }

    HasRelatedEntities(): boolean {
        return this.entities
            && this.entities.length > 0
            ? true : false;
    }

    HasRelatedVideos(): boolean {
        return this.videos
            && this.videos.length > 0
            ? true : false;
    }

    get graphData(): MathSolverGraphData[] {
        if (!this.mathSolverResult) {
            return [];
        }
        return this.mathSolverResult.allGraphData;
    }
}
