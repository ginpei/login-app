export interface DataRecord {
  createdAt: number;
  id: string;
  updatedAt: number;
}

export function createDataRecord(initial?: Partial<DataRecord>): DataRecord {
  return {
    createdAt: initial?.createdAt ?? 0,
    id: initial?.id ?? "",
    updatedAt: initial?.updatedAt ?? 0,
  };
}
