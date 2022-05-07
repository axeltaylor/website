import Avatar from '../common/avatar/Avatar'

const Header = () => {
  return (
    <header>
      <div className="flex flex-row items-center w-full">
        <div className="flex-shrink-0">
          <Avatar />
        </div>
        <div className="flex flex-col ml-4">
          <h1 className="font-black text-2xl">Axel Taylor</h1>
          <h2 className="font-medium text-lg">
            Principal Software Engineer{' '}
            <a href="https://betterask.erni" target="_blank" rel="noreferrer">
              @ERNI
            </a>
          </h2>
        </div>
      </div>
    </header>
  )
}

export default Header
