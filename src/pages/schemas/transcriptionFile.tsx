import { useTranslation } from 'react-i18next';

export function Transcription(lastItem) {
    const { t } = useTranslation();
    const data = {
        status: "Status",
        region: "Region",
        totalTables: "Total Tables",
        rowCount: "Row Count",
        size: "Size",
        mindate: "Min Date",
        maxdate: "Max Date",
        yoycount: "YoYo Count",
        momcount: "MoMo Count",
        isPrimary: "Is Primary",
        defaultValue: "Default Value",
        nullable: "Nullable",
        unique: "Unique",
        type: "Type",
    };

    const transcriptObj = {};
    for (const key in lastItem) {
        const defaultValue = data[key];
        const value = lastItem[key] ?? defaultValue ?? null;
        const fieldName = defaultValue || key;
        transcriptObj[fieldName] = t(`data.${key}`, { defaultValue: value });
    }

    return transcriptObj;
}