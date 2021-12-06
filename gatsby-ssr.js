import { Layout } from "./src/components"
import React from "react"

export const wrapRootElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)
