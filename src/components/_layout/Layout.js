import React from "react"
export default function Layout({ children }) {
  return (
    <main style={{ margin: `0 auto`, minWidth: 650, padding: `0 1rem`, marginTop: `5rem` }}>
      {children}
    </main>
  )
}