---
to: "<%= type == 'ui' ? `app/components/ui/${h.changeCase.pascal(name)}/index.tsx` : `app/components/${h.changeCase.pascal(name)}/index.tsx` %>"
---
export { <%= h.changeCase.pascal(name) %> } from './<%= h.changeCase.pascal(name) %>';