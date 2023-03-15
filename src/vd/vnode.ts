const render = (vnode: VNode, container: HTMLElement|null) => {
  const el = document.createElement(vnode.tag)
  for (const pKey in vnode.props) {
    // handle event
    if (/^on/.test(pKey)) {
      el.addEventListener(
        pKey.substring(2).toLowerCase(),
        vnode.props[pKey]
      )
    }
    // handle class
    else if (pKey === 'class') {
      el.setAttribute('class', vnode.props['class'] as string)
    }
    // handle style
    else if (pKey === 'style') {
      if (typeof vnode.props['style'] === 'string') {
        el.setAttribute('style', vnode.props['style'])
      } else {
        el.setAttribute('style', style(vnode.props['style'] as StyleAttribute))
      }
    }
    // handle normal, such as `id, src, href...`
    else {
      el.setAttribute(pKey, vnode.props[pKey] as string)
    }
  }
  // handle text node
  if (typeof vnode.children === 'string') {
    el.appendChild(document.createTextNode(vnode.children))
  }

  // handle VNode array
  else if (Array.isArray(vnode.children)) {
    vnode.children.forEach((child : VNode) => {
      render(child, el)
    })
  }

  // handle html node
  else if (vnode.children instanceof RawHTML) {
    el.innerHTML = vnode.children.value
  }

  container?.appendChild(el)
}

const style = (styleObj: StyleAttribute) => {
  let styleText = ''
  for (const sKey in styleObj) {
    styleText += sKey + ': ' + styleObj[sKey] + '; '
  }
  return styleText.trim();
}

const html = (html: string) : RawHTML => {
  const htmlNode: RawHTML = new RawHTML(html)
  return htmlNode
}

class RawHTML implements HTMLNode {
  value: string

  constructor(html: string) {
    this.value = html
  }
}

export {
  render,
  style,
  html,
  RawHTML
}