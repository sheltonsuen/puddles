import {
  retriveRecords,
  retriveRecordsRefactord,
  emptyRecordsRefactord
} from '../separateQueryFromModifier';

describe('SeparateQueryFromModifier', () => {
  context('before separate query from modifier', () => {
    it('should return the records and empty the records of the loger', () => {
      const loger = { records: [1, 2] };

      expect(retriveRecords(loger)).to.be.deep.equal([1, 2]);
      expect(loger.records).to.be.deep.equal([]);
    });
  });
  
  context('after separate query from modifier', () => {
    it('should return the records and empty the records of the loger', () => {
      const loger = { records: [1, 2] };

      expect(retriveRecordsRefactord(loger)).to.be.deep.equal([1, 2]);

      emptyRecordsRefactord(loger);

      expect(loger.records).to.be.deep.equal([]);
    });
  });
});
