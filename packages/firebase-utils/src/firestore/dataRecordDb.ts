import { QueryDocumentSnapshot, Timestamp } from "firebase/firestore";
import { createDataRecord, DataRecord } from "./DataRecord";

export function dataRecordFromFirestore(ss: QueryDocumentSnapshot): DataRecord {
  const data = ss.data();
  const { createdAt, updatedAt } = data;
  return createDataRecord({
    createdAt: createdAt instanceof Timestamp ? createdAt.toMillis() : 0,
    id: ss.id,
    updatedAt: updatedAt instanceof Timestamp ? updatedAt.toMillis() : 0,
  });
}
