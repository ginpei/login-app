import { sleep } from "@login-app/misc/out";
import { useEffect, useState } from "react";
import { Note } from "./Note";

export function usePublicNotes(): [Note[] | undefined, Error | null] {
  const [notes, setNotes] = useState<Note[] | undefined>(undefined);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    sleep(200).then(() => {
      setNotes([
        {
          body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate illo ab debitis ipsa. Quis blanditiis eius eveniet! Quibusdam ex fugiat sint, laudantium enim, laboriosam dicta praesentium porro odit et blanditiis.",
          id: "note-001",
          title: "My first note",
          userId: "user-001",
        },
        {
          body: "Numquam, laudantium. Architecto dolor sequi deserunt tempore. Voluptatum, dolorem laudantium tempora, sequi nisi culpa aliquid repudiandae modi, quo ex error qui veniam. Nihil, repellat corporis? Doloribus reiciendis atque voluptatum consequatur. Ex, voluptate repellat. Quibusdam eius tempore, officia asperiores hic expedita esse necessitatibus fuga, non corrupti dolorem praesentium cum eos sunt exercitationem earum repellat illo recusandae quasi doloremque veniam repudiandae! Magni! Quas amet laboriosam molestias molestiae natus pariatur deleniti recusandae rem at quisquam id, aspernatur iure exercitationem consequatur architecto! Et ea excepturi quod explicabo pariatur culpa laudantium dolore atque! Praesentium, placeat?",
          id: "note-002",
          title: "Hello world!",
          userId: "user-001",
        },
      ]);
    });
  }, []);

  return [notes, error];
}
