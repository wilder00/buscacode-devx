import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string
  titleId?: string
}
const SvgClose = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="#e3e3e3"
    viewBox="0 -960 960 960"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M480-424 284-228q-11 11-28 11t-28-11-11-28 11-28l196-196-196-196q-11-11-11-28t11-28 28-11 28 11l196 196 196-196q11-11 28-11t28 11 11 28-11 28L536-480l196 196q11 11 11 28t-11 28-28 11-28-11z" />
  </svg>
)
export default SvgClose
