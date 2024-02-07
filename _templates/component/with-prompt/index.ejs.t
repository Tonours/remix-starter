---
to: "<%= type == 'ui' ? `app/components/ui/${h.changeCase.pascal(name)}/index.ts` : `app/components/${h.changeCase.pascal(name)}/index.ts` %>"
---
export { <%= h.changeCase.pascal(name) %> } from './<%= h.changeCase.pascal(name) %>.tsx';