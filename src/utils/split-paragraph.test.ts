import { splitParagraph } from './split-paragraph'

describe('splitParagraph', () => {
  it('should handle empty input', () => {
    const result = splitParagraph('');
    expect(result).toEqual([]);
  });

  it('should handle single paragraph without empty lines', () => {
    const result = splitParagraph('This is a paragraph.\nIt has multiple lines.');
    expect(result).toEqual([['This is a paragraph.', 'It has multiple lines.']]);
  });

  it('should handle multiple paragraphs separated by empty lines', () => {
    const result = splitParagraph('First paragraph.\n\nSecond paragraph.');
    expect(result).toEqual([['First paragraph.'], ['Second paragraph.']]);
  });

  it('should handle paragraphs', () => {
    const result = splitParagraph('First paragraph.\n\n\nSecond paragraph.');
    expect(result).toEqual([['First paragraph.'], ['Second paragraph.']]);
  });

  it('should handle markdown paragraphs', () => {
    const result = splitParagraph('# Title\nFirst paragraph.\n\n# Another Title\nSecond paragraph.', { isMarkdown: true });
    expect(result).toEqual([['# Title', 'First paragraph.'], ['# Another Title', 'Second paragraph.']]);
  });

  it('should handle markdown paragraphs with resetex title', () => {
    const result = splitParagraph('Title\n---\nFirst paragraph.\n## Another Title\nSecond paragraph.\nSub Title\n=====\nThird paragraph', { isMarkdown: true });
    expect(result).toEqual([['Title', '---', 'First paragraph.'], ['## Another Title', 'Second paragraph.'], ['Sub Title', '=====', 'Third paragraph']]);
  });

  it('should handle paragraphs with title lines and empty lines', () => {
    const result = splitParagraph('# Title\nFirst paragraph.\n\n\n\n# Another Title\nSecond paragraph.\n');
    expect(result).toEqual([['# Title', 'First paragraph.'], ['# Another Title', 'Second paragraph.']]);
  });

  it('should handle markdown paragraphs with title lines', () => {
    const result = splitParagraph('# Title\nFirst paragraph.\n# Another Title\nSecond paragraph.', { isMarkdown: true});
    expect(result).toEqual([['# Title', 'First paragraph.'], ['# Another Title', 'Second paragraph.']]);
  });

  it('should handle markdown paragraphs with only title lines', () => {
    const result = splitParagraph('# Title 1\n# Title 2', { isMarkdown: true });
    expect(result).toEqual([['# Title 1'], ['# Title 2']]);
  });

  it('should handle markdown paragraphs with mixed content', () => {
    const result = splitParagraph('First paragraph.\n\n# Title\nSecond paragraph.\n\nThird paragraph.', { isMarkdown: true });
    expect(result).toEqual([['First paragraph.'], ['# Title', 'Second paragraph.'], ['Third paragraph.']]);
  });
});