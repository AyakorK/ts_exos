import { randomInt, randomBytes } from 'crypto';
import { sortByDate } from './exo2';

interface Subject {
    id: number,
    name?: string,
    created_at?: string | Date,
}

interface Obj {
    [key: string]: Subject
}

const generateTestObj = (n: number) => {
  const testObj: Obj = {}
  for (let i = 0; i < n; i++) {
    const isoTime = new Date(randomInt(1691102965811, 1696102965811)).toISOString()
    testObj[isoTime] = {
      id: i,
      name: randomBytes(5).toString('hex')
    }
  }
  return testObj
}

describe('sortByDate', () => {
  it('should sort the array by date in ascending order', () => {
    const testObj: Obj = generateTestObj(10); // Generate test data with 10 items

    const sorted: Subject[] = sortByDate(testObj);

    // Check that the sorted array is in ascending order by date
    for (let i = 0; i < sorted.length - 1; i++) {
      expect(new Date(sorted[i].created_at as string).getTime())
        .toBeLessThanOrEqual(new Date(sorted[i + 1].created_at as string).getTime());
    }
  });

  it('should sort the array by date in descending order', () => {
    const testObj: Obj = generateTestObj(10); // Generate test data with 10 items

    const sorted: Subject[] = sortByDate(testObj, true);

    for (let i = 0; i < sorted.length - 1; i++) {
      expect(new Date(sorted[i].created_at as string).getTime())
        .toBeGreaterThanOrEqual(new Date(sorted[i + 1].created_at as string).getTime());
    }
  });
});
