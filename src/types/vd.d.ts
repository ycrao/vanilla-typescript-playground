interface VNode {
  /*
  tag:
   - div,h1,header,span,...
   - :text textNode
   - :html innerHTML
   */
  readonly tag: string
  props: PropsAttribute
  children: string|HTMLNodeOrResolver|VNode[]
}

interface PropsAttribute {
  style?: string|StyleAttribute
  id?: string
  class?: string
  /*
  others:
  - events: on{Event} such as onClick...
  - special or complex instructions: x-{Command} such as x-html,x-model,x-value,x-if,...
   */
  [propName: string]: any
}

interface StyleAttribute {
  [propName: string]: any
}

interface HTMLNode {
  value: string
}
type HTMLNodeResolver = (html: string) => HTMLNode
type HTMLNodeOrResolver = HTMLNode | HTMLNodeResolver
