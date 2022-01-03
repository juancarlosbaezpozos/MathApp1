import { JsonConvert } from "json2typescript";

class StorageUtil {
    GetObject<T>(key: string, expectedClass: { new(): T }): T | undefined {
        const content = localStorage.getItem(key);
        if (!content || typeof content !== "string") {
            return undefined;
        }

        try {
            return new JsonConvert().deserializeObject<T>(JSON.parse(content), expectedClass) as T;
        }
        catch (e) {
            return undefined;
        }
    }

    SetObject(key: string, value: object) {
        localStorage.setItem(key, JSON.stringify(value));
    }
}

export default new StorageUtil();