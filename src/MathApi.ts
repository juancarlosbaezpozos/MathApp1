import { JsonConvert } from "json2typescript";

import DetailedGraphResponse from "./models/DetailedGraphResponse";
import EducationResponse from "./models/EducationResponse";
import MathOCRResponse from "./models/MathOCRResponse";
import MathSolverResponse from "./models/MathSolverResponse";
import { EmptyString } from "./utils/StringUtil";

class MathApi {
    async GetExpressionFromImageBase64(imageBase64: string): Promise<string> {
        const fetch = require("node-fetch");
        const requestInfo: RequestInfo | any = {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                data: imageBase64,
                clientInfo: {
                    platform: "web"
                },
                timestamp: new Date().getTime()
            })
        };

        try {
            const response = await fetch("https://www.bing.com/cameraexp/api/v1/getlatex", requestInfo);
            if (response && response.ok) {
                const jsonObj = await response.json();
                if (jsonObj) {
                    const ocrResponse: MathOCRResponse = new JsonConvert().deserializeObject(jsonObj, MathOCRResponse);
                    if (ocrResponse && !ocrResponse.isError && ocrResponse.latex) {
                        return ocrResponse.latex;
                    }
                }
            }
        } catch (e) {
            console.log(e);
        }

        return EmptyString;
    }

    async GetAnswerFromExpression(latex: string, market: string): Promise<EducationResponse | undefined> {
        //const fs = require('fs');
        const fetch = require("node-fetch");
        const requestInfo: RequestInfo | any = {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                latexExpression: latex,
                clientInfo: {
                    platform: "web",
                    mkt: market
                }
            })
        };

        const response = await fetch("https://www.bing.com/cameraexp/api/v1/solvelatex", requestInfo);
        if (response && response.ok) {
            const jsonObj = await response.json();
            if (jsonObj) {
                const customData = JSON.parse(jsonObj.results[0].tags[0].actions[0].customData);
                const previewedTxt = JSON.parse(customData.previewText);

                /*const act: MathSolverResponse = new JsonConvert().deserializeObject(previewedTxt.mathSolverResult, MathSolverResponse);
                act.actions.map((t, i) => {
                    console.log(t.actionName);
                    console
                    t.templateSteps.map((st) => {
                        console.log(st.templateName);
                        st.steps.map((p)=>{
                            console.log(p.expression);
                            console.log(p.step);
                        });
                    });
                });*/

                const mathSolverResponse: MathSolverResponse = new JsonConvert().deserializeObject(previewedTxt.mathSolverResult, MathSolverResponse);
                const mathResponse: EducationResponse = new JsonConvert().deserializeObject(previewedTxt, EducationResponse);
                mathResponse.mathSolverResult = mathSolverResponse;

                return mathResponse;
            }
        }

        return undefined;
    }

    async GetGraphDataFromGraphExpressions(expressions: string[]): Promise<DetailedGraphResponse | undefined> {
        const fetch = require("node-fetch");
        const requestInfo: RequestInfo | any = {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                graphExpressions: expressions,
                clientInfo: {
                    platform: "web"
                }
            })
        };

        const response = await fetch("https://www.bing.com/cameraexp/api/v1/getgraphdata", requestInfo);
        if (response && response.ok) {
            const jsonObj = await response.json();
            if (jsonObj) {
                return new JsonConvert().deserializeObject(jsonObj, DetailedGraphResponse);
            }
        }

        return undefined;
    }
}

export default new MathApi();