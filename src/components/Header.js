import Avatar from '../components/Avatar'

function Header() {
    return (
        <header className="mt-7 shadow-md p-4 flex space-x-6 flex-col items-center md:flex-row">
            <img src="https://avatars1.githubusercontent.com/u/16757133" alt="I am" className="rounded-full w-28 ml-2" />
            <div className="md:w-3/6">
                <p className="text-gray-600 text-2xl font-bold">Hello Friends,</p>
                <p className="text-gray-500">My name is Andrew Stepanets and I am an experienced front end developer, and this is my personal blog</p>
            </div>

        </header>
    )
}

export default Header