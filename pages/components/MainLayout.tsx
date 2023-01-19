

export default function MainLayout({ children }) {
  return (
    <>
    <div>header</div>
      <main>{children}</main>
    <div>footer</div>
    </>
  )
}