import { projects, getTechUsedUrl } from './config';

describe('config', () => {
  describe('projects', () => {
    it('each project tech stack has an associated url in the tech url map', () => {
      const techUsedSet = new Set(projects.flatMap(({ techUsed }) => techUsed));

      techUsedSet.forEach((techUsedItem) => {
        const url = getTechUsedUrl(techUsedItem);
        expect(url).toBeDefined();
      });
    });
  });
});
