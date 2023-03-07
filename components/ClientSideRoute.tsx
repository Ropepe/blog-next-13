'use client'
import Link from 'next/link'

type IProps = {
  children: React.ReactNode
  route: string
}

const ClientSideRoute = ({ children, route }: IProps) => {
  return (
    <Link href={route}>{children}</Link>
  )
}

export default ClientSideRoute