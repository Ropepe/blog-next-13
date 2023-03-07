import Image from 'next/image'

function Logo(props: any) {
  const { renderDefault, title } = props
  return (
    <div className="flex items-center space-x-2">
      <Image
        className="object-cover"
        width={50}
        height={50}
        // src="/icons8-logo-30.png"
        src="https://img.icons8.com/bubbles/256/duolingo-logo.png"
        alt="brand logo"
      ></Image>
      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  )
}
export default Logo
