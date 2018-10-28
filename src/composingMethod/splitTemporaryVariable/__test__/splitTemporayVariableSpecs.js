import {
  raiseFoo,
  afterSplitTemporaryVariable_raiseFoo
} from '../splitTemporaryVariable';

const sandbox = sinon.createSandbox();

describe('splitTemporaryVariable', () => {
  const rectangle = {
    width: 10,
    height: 10
  };
  let raiseStub;

  beforeEach(() => {
    raiseStub = sandbox.stub();
  });

  afterEach(() => {
    sandbox.restore();
  });

  context('before split temporary variable', () => {
    it('should raise perimeter and area when given the rectangle', () => {
      raiseFoo(rectangle, raiseStub);

      expect(raiseStub.firstCall).to.have.been.calledWith(40);
      expect(raiseStub.secondCall).to.have.been.calledWith(100);
    });
  });

  context('after split temporary variable', () => {
    it('should raise perimeter and area when given the rectangle', () => {
      afterSplitTemporaryVariable_raiseFoo(rectangle, raiseStub);

      expect(raiseStub.firstCall).to.have.been.calledWith(40);
      expect(raiseStub.secondCall).to.have.been.calledWith(100);
    });
  });
});
