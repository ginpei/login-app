import { createDataRecord, DataRecord } from "@ginpei/firebase-utils-react";

export interface Profile extends DataRecord {
  name: string;
}

export function createProfile(initial: Partial<Profile> = {}): Profile {
  return {
    ...createDataRecord(initial),
    name: initial.name ?? "",
  };
}
