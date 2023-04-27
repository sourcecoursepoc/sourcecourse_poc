import { useTranslation } from "react-i18next";

export function Transcription(projectArray) {
  const { t } = useTranslation();
  const data = {
    status: "Status",
    tables: "Tables",
    groups: "Groups",
    users: "Users",
    initialLoad: "Initial Load",
    sync: "Sync",
  };

  const transcriptObj = {};
  for (const key in projectArray) {
    const defaultValue = data[key];
    const value = projectArray[key] ?? defaultValue ?? null;
    const fieldName = defaultValue || key;
    transcriptObj[fieldName] = value;
    // console.log(`data.${key}: ${value}`);
  }

  return transcriptObj;
}
