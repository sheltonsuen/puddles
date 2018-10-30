export const retriveRecords = loger => {
  const records = loger.records;
  loger.records = [];
  return records;
};

export const retriveRecordsRefactord = loger => loger.records;
export const emptyRecordsRefactord = loger => (loger.records = []);
