interface Subject {
    id: number,
    name?: string,
    created_at?: string | Date,
}

interface Obj {
    [key: string]: Subject
}

export function sortByDate(obj: Obj, desc = false): Subject[] {
  return Object.values(obj)
    .filter(item => typeof item.created_at === 'string') // Filter out items with invalid created_at
    .sort((a, b) => {
      if (a.created_at && b.created_at) {
        return desc ? new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          : new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
      }
      return 0;
    });
}
