import ExpressionHistory from "../models/ExpressionHistory";
import ExpressionHistoryItem from "../models/ExpressionHistoryItem";

import StorageUtil from "./StorageUtil";

const MAX_HISTORY_LENGTH = 10;

class HistoryUtil {

    AddItem(newItem: ExpressionHistoryItem) {
        let history = StorageUtil.GetObject<ExpressionHistory>("History", ExpressionHistory);
        if (!history) {
            history = new ExpressionHistory();
        }

        const itemIndex = history.items.findIndex(i => i.key === newItem.key);
        if (itemIndex >= 0) {
            history.items.splice(itemIndex, 1);
        }

        history.items.unshift(newItem);

        history.items = history.items.slice(0, MAX_HISTORY_LENGTH);

        StorageUtil.SetObject("History", history);
    }

    GetHistory(): ExpressionHistory {
        const history = StorageUtil.GetObject<ExpressionHistory>("History", ExpressionHistory);
        if (history) {
            return history;
        }
        return new ExpressionHistory();
    }
}

export default new HistoryUtil();