import MarkdownIt from 'markdown-it'

const handlePlugin = (plugin) => plugin.default || plugin

export default ({}, inject) => {
  const md = new MarkdownIt('default', {"linkify":true,"breaks":true,"injected":true})

  inject('md', md)
}