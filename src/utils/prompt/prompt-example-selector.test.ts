import { PromptExampleSelector, PromptExamples } from "./prompt-example-selector";

class ExampleSelector extends PromptExampleSelector<string> {
  selectExample(example: string) {
    if (example.startsWith('valid')) {
      return example;
    }
  }
}

describe('PromptExampleSelector', () => {
  it('should be able to handle AsyncIterable', async () => {
    const asyncExamples: PromptExamples<string> = {
      [Symbol.asyncIterator]: async function* () {
        yield 'valid1';
        yield 'invalid';
        yield 'valid2';
        yield 'valid3';
        yield 'valid4';
        yield 'valid5';
      },
    };

    const selector = new ExampleSelector(asyncExamples);

    const selectedExamples: any[] = [];
    for await (const example of selector) {
      selectedExamples.push(example);
    }

    expect(selectedExamples).toEqual(['valid1', 'valid2', 'valid3', 'valid4', 'valid5']);

    selectedExamples.length = 0
    selector.maxLength = 2
    for await (const example of selector) {
      selectedExamples.push(example);
    }
    expect(selectedExamples).toEqual(['valid1', 'valid2']);
  });

  it('should be able to handle Iterable', async () => {
    const syncExamples: PromptExamples<string> = ['valid1', 'invalid', 'valid2'];

    const selector = new ExampleSelector(syncExamples);

    const selectedExamples: string[] = [];
    for await (const example of selector) {
      selectedExamples.push(example);
    }

    expect(selectedExamples).toEqual(['valid1', 'valid2']);
  });

  it('should respect maxLength when selecting examples', async () => {
    const examples: PromptExamples<string> = [
      'valid1',
      'invalid',
      'valid2',
      'valid3',
      'valid4',
    ];

    const selector = new ExampleSelector(examples, { maxLength: 3 });

    const selectedExamples: string[] = [];
    for await (const example of selector) {
      selectedExamples.push(example);
    }

    expect(selectedExamples).toEqual(['valid1', 'valid2', 'valid3']);
  });

  it('should use default maxLength (Infinity) if not specified', async () => {
    const examples: PromptExamples<string> = [
      'valid1',
      'invalid',
      'valid2',
      'valid3',
      'valid4',
      'valid5',
      'valid6',
      'invalid2',
    ];

    const selector = new ExampleSelector(examples);

    const selectedExamples: string[] = [];
    for await (const example of selector) {
      selectedExamples.push(example);
    }

    expect(selectedExamples).toEqual(['valid1', 'valid2', 'valid3', 'valid4', 'valid5', 'valid6']);
  });
});