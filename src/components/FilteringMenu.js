

export default function FilteringMenu({ onChange, filter }) {
    return (
        <div className="filtering-menu mb-2">
            <div onClick={() => {
                onChange();
            }}>
                {!filter ? <span>Thumb </span> : <span>List</span>}
            </div>
        </div>
    )
}