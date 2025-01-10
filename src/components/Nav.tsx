import { HiBars2 } from "react-icons/hi2";

const Nav: React.FC = () => {
    return (
        <nav className="fixed w-full z-50 p-8 flex items-center justify-between">
            <div className="text-2xl lg:text-sm">Portfólio</div>
            <div>
                <HiBars2 fontSize={34} />
            </div>
        </nav>
    )
}

export default Nav;