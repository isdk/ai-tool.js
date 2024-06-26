import { describe, it, expect } from "vitest";

import { Environment, Interpreter } from "../src/runtime";
import { tokenize } from "../src/lexer";
import { parse } from "../src/parser";

describe("Test interpreter options", () => {
	// https://jinja.palletsprojects.com/en/3.0.x/templates/#whitespace-control
	it("should handle whitespace control", () => {
		const EXAMPLE_IF_TEMPLATE = `<div>\n    {% if True %}\n        yay\n    {% endif %}\n</div>`;
		const EXAMPLE_FOR_TEMPLATE = `{% for item in seq %}\n    {{ item }}\n{% endfor %}`;
		const EXAMPLE_FOR_TEMPLATE_2 = `{% for item in seq -%}\n    {{ item }}\n{% endfor %}`;
		const EXAMPLE_FOR_TEMPLATE_3 = `{% for item in seq %}\n    {{ item }}\n{%- endfor %}`;
		const EXAMPLE_FOR_TEMPLATE_4 = `{% for item in seq -%}\n    {{ item }}\n{%- endfor %}`;
		const EXAMPLE_COMMENT_TEMPLATE = `    {# comment #}\n  {# {% if true %} {% endif %} #}\n`;

		const seq = [1, 2, 3, 4, 5, 6, 7, 8, 9];

		const TESTS = [
			// If tests
			{
				template: EXAMPLE_IF_TEMPLATE,
				data: {},
				options: {},
				target: `<div>\n    \n        yay\n    \n</div>`,
			},
			{
				template: EXAMPLE_IF_TEMPLATE,
				data: {},
				options: {
					lstrip_blocks: true,
				},
				target: `<div>\n\n        yay\n\n</div>`,
			},
			{
				template: EXAMPLE_IF_TEMPLATE,
				data: {},
				options: {
					trim_blocks: true,
				},
				target: `<div>\n            yay\n    </div>`,
			},
			{
				template: EXAMPLE_IF_TEMPLATE,
				data: {},
				options: {
					lstrip_blocks: true,
					trim_blocks: true,
				},
				target: `<div>\n        yay\n</div>`,
			},

			// For tests
			{
				template: EXAMPLE_FOR_TEMPLATE,
				data: { seq },
				options: {},
				target: `\n    1\n\n    2\n\n    3\n\n    4\n\n    5\n\n    6\n\n    7\n\n    8\n\n    9\n`,
			},
			{
				template: EXAMPLE_FOR_TEMPLATE,
				data: { seq },
				options: { lstrip_blocks: true },
				target: `\n    1\n\n    2\n\n    3\n\n    4\n\n    5\n\n    6\n\n    7\n\n    8\n\n    9\n`,
			},
			{
				template: EXAMPLE_FOR_TEMPLATE,
				data: { seq },
				options: { trim_blocks: true },
				target: `    1\n    2\n    3\n    4\n    5\n    6\n    7\n    8\n    9\n`,
			},
			{
				template: EXAMPLE_FOR_TEMPLATE,
				data: { seq },
				options: { lstrip_blocks: true, trim_blocks: true },
				target: `    1\n    2\n    3\n    4\n    5\n    6\n    7\n    8\n    9\n`,
			},
			{
				template: EXAMPLE_FOR_TEMPLATE_2,
				data: { seq },
				options: {},
				target: `1\n2\n3\n4\n5\n6\n7\n8\n9\n`,
			},
			{
				template: EXAMPLE_FOR_TEMPLATE_3,
				data: { seq },
				options: {},
				target: `\n    1\n    2\n    3\n    4\n    5\n    6\n    7\n    8\n    9`,
			},
			{
				template: EXAMPLE_FOR_TEMPLATE_3,
				data: { seq },
				options: { trim_blocks: true },
				target: `    1    2    3    4    5    6    7    8    9`,
			},
			{
				template: EXAMPLE_FOR_TEMPLATE_4,
				data: { seq },
				options: {},
				target: `123456789`,
			},

			// Comment tests
			{
				template: EXAMPLE_COMMENT_TEMPLATE,
				data: {},
				options: {},
				target: `    \n  `,
			},
			{
				template: EXAMPLE_COMMENT_TEMPLATE,
				data: {},
				options: { lstrip_blocks: true },
				target: `\n`,
			},
			{
				template: EXAMPLE_COMMENT_TEMPLATE,
				data: {},
				options: { trim_blocks: true },
				target: `      `,
			},
			{
				template: EXAMPLE_COMMENT_TEMPLATE,
				data: {},
				options: { lstrip_blocks: true, trim_blocks: true },
				target: ``,
			},
			{
				template: '{{ obj | tojson }}',
				data: {obj: {a: 1, b: 2}},
				options: { lstrip_blocks: true, trim_blocks: true },
				target: `{"a":1,"b":2}`,
			},
			{
				template: `{{ obj + '' }}`,
				data: {obj: {a: 1, b: 2}},
				options: { lstrip_blocks: true, trim_blocks: true },
				target: `{"a":1,"b":2}`,
			},
			{
				template: `{{ '' + obj }}`,
				data: {obj: {a: 1, b: 2}},
				options: { lstrip_blocks: true, trim_blocks: true },
				target: `{"a":1,"b":2}`,
			},
			{
				template: `{{ obj }}`,
				data: {obj: new TestObj({a: 1, b: 2})},
				options: { lstrip_blocks: true, trim_blocks: true },
				target: `[["a",1],["b",2]]`,
			},
			{
				template: `{{ obj | string }}`,
				data: {obj: {a: 1, b: 2}},
				options: { lstrip_blocks: true, trim_blocks: true },
				target: `{"a":1,"b":2}`,
			},
			{
				template: '{{ obj | tojson }}',
				data: {obj: [3,2,1]},
				options: { lstrip_blocks: true, trim_blocks: true },
				target: `[3,2,1]`,
			},
			{
				template: '{{ "   test it  ".rstrip() }}',
				data: {obj: [3,2,1]},
				options: { lstrip_blocks: true, trim_blocks: true },
				target: `   test it`,
			},
			{
				template: '{{ "   test it  ".lstrip() }}',
				data: {obj: [3,2,1]},
				options: { lstrip_blocks: true, trim_blocks: true },
				target: `test it  `,
			},
			{
				template: '{{ "   test it  " | trimEnd }}',
				data: {obj: [3,2,1]},
				options: { lstrip_blocks: true, trim_blocks: true },
				target: `   test it`,
			},
			{
				template: '{{ "   test it  " | trimStart }}',
				data: {obj: [3,2,1]},
				options: { lstrip_blocks: true, trim_blocks: true },
				target: `test it  `,
			},
		];

		for (const test of TESTS) {
			const env = new Environment();
			env.set("True", true);
			for (const [key, value] of Object.entries(test.data)) {
				env.set(key, value);
			}

			const tokens = tokenize(test.template, test.options);
			const parsed = parse(tokens);

			const interpreter = new Interpreter(env);
			const result = interpreter.run(parsed);
			expect(result.value).toEqual(test.target);
		}
	});

  it("should support custom filter", async () => {
		const options = { lstrip_blocks: true, trim_blocks: true }
		const env = new Environment();
		env.set('MSelect', function(operand, key) {
			return operand[key]
		});
		env.set('content', {hi: 'world', x: 2, a: [1,29]});
		const tokens = tokenize(`{{ content | MSelect('hi') }}`, options);
		const parsed = parse(tokens);

		const interpreter = new Interpreter(env);
		const result = interpreter.run(parsed);
		expect(result.value).toEqual('world');
  });
});

class TestObj {
	constructor(opt) {
		if (opt) Object.assign(this, opt);
	}
	toString() {
		return JSON.stringify(Object.entries(this))
	}
}