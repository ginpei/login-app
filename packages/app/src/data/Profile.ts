export interface Profile {
  id: string;
  name: string;
}

export function createProfile(initial: Partial<Profile> = {}): Profile {
  return {
    id: initial.id ?? "",
    name: initial.name ?? "",
  };
}
