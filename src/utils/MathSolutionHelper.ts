import { EmptyString } from "./StringUtil";

export default class MathSolutionHelper {
    static IsTrueFalseAnswer(answer: string) {
        answer = this.TrimMathExpression(answer);
        return this.isTrueAnswer(answer) ||
            this.isFalseAnswer(answer);
    }

    static IsFalseAnswer(answer: string) {
        answer = this.TrimMathExpression(answer);
        return this.isFalseAnswer(answer);
    }

    private static isTrueAnswer(answer: string) {
        return answer === "\\text{true}";
    }

    private static isFalseAnswer(answer: string) {
        return answer === "\\text{false}";
    }

    static GetTrueFalseLocalizedAnswer(answer: string) {
        answer = this.TrimMathExpression(answer);
        if (answer === "\\text{false}") {
            return "False";
        } else if (answer === "\\text{true}") {
            return "True";
        }

        return EmptyString;
    }

    static TrimMathExpression(expression: string): string {
        return expression.trim().replace(/(^[\$]+)|([\$]+$)/g, "");
    }
}