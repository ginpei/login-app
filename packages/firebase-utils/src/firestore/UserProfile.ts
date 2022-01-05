import { createDataRecord, DataRecord } from "./DataRecord";

export interface UserProfile extends DataRecord {
  name: string;
}

export function createUserProfile(initial?: Partial<UserProfile>): UserProfile {
  return {
    ...createDataRecord(initial),
    name: initial?.name ?? "",
  };
}
