import { caculateArea, caculateAreaRefactored } from '../removeParameter';

describe('Remove Parameter', () => {
  it('should return the area of the square', () => {
    const square = { width: 30, height: 40 };

    expect(caculateArea(square)).to.be.equal(1200);
  });

  it('should return the area of the square', () => {
    const square = { width: 30, height: 40 };

    expect(caculateAreaRefactored(square)).to.be.equal(1200);
  });
});
