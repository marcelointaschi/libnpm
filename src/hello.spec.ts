import { sayHello } from "./hello";

describe('testing hello file', () => {
    test('run method to say hello', () => {
      expect(sayHello).not.toThrowError();
    });
  
});