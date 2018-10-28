import {
  analysisPerson,
  afterRefactor_analysisPerson
} from '../consolidateDuplicatedConditionalFragments';

const sandbox = sinon.createSandbox();

describe('consolidateDuplicatedConditionalFragments', () => {
  let raiseAnalysisStub = sandbox.stub();

  context('before consolidate duplicated conditional fragments', () => {
    it('should call raiseAnalysis with audlt equals ture when the person has child', () => {
      const hasChild = () => true;
      const person = { hasChild };

      analysisPerson(person, raiseAnalysisStub);

      expect(raiseAnalysisStub).to.be.calledWith({ hasChild, adult: true });
    });

    it('should call raiseAnalysis with audlt equals undefined when the person do not has child', () => {
      const hasChild = () => false;
      const person = { hasChild };

      analysisPerson(person, raiseAnalysisStub);

      expect(raiseAnalysisStub).to.be.calledWith({ hasChild });
    });
  });

  context('after consolidate duplicated conditional fragments', () => {
    it('should call raiseAnalysis with audlt equals ture when the person has child', () => {
      const hasChild = () => true;
      const person = { hasChild };

      afterRefactor_analysisPerson(person, raiseAnalysisStub);

      expect(raiseAnalysisStub).to.be.calledWith({ hasChild, adult: true });
    });

    it('should call raiseAnalysis with audlt equals undefined when the person do not has child', () => {
      const hasChild = () => false;
      const person = { hasChild };

      afterRefactor_analysisPerson(person, raiseAnalysisStub);

      expect(raiseAnalysisStub).to.be.calledWith({ hasChild });
    });
  });
});
