import sinon from 'sinon';

const sandbox = sinon.createSandbox();

describe('Detector', () => {
  afterEach(() => {
    sandbox.restore();
  });

  it('should working with sinon', () => {
    const fooStub = sandbox.stub();

    fooStub();

    expect(fooStub).to.be.called;
  });
});
