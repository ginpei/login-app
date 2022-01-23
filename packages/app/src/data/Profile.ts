import { createDataRecord, DataRecord } from "@login-app/firebase-utils";

export interface Profile extends DataRecord {
  name: string;
}

export function createProfile(initial: Partial<Profile> = {}): Profile {
  return {
    ...createDataRecord(initial),
    name: initial.name ?? "",
  };
}
