export interface Option {
  isProd?: boolean
  startKey?: string
}

declare function _default(props?: Option): import("esbuild").Plugin

export default _default
