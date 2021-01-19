
import { FaList as IconList, FaBorderAll as IconBorder } from "react-icons/fa";


export default function FilteringMenu({ onChange, filter }) {
    return (
        <div className="filtering-menu mb-2">
            <div onClick={() => {
                onChange();
            }}>
                {!filter ? <IconList
                    className="clickable hoverable"
                    size="20px" />
                    : <IconBorder
                        className="clickable hoverable"
                        size="20px" />}
            </div>
        </div>
    )
}