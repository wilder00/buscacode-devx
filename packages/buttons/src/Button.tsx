export interface ButtonProps {
  disabled?: boolean
}
export default function Button({
  children
}: React.PropsWithChildren<ButtonProps>) {
  return (
    <button className="dark:bg-slate-900 dark:border-slate-600 dark:hover:bg-slate-800 rounded-md border px-3 py-1 text-xs font-thin active:scale-95">
      {children}
    </button>
  )
}
