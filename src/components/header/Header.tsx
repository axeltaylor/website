import Avatar from '../common/avatar/Avatar'

const Header = () => {
  return (
    <header className="md:container mx-auto flex my-6 px-6 md:my-8 md:px-8">
      <div className="flex flex-col md:flex-row items-center w-full">
        <Avatar />
        <div className="flex flex-col justify-center items-center md:items-start md:ml-4">
          <h1 className="font-black text-2xl text-center md:text-left">
            Axel Taylor
          </h1>
          <h2 className="font-medium text-lg text-center">
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
