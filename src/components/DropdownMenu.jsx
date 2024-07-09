function DropdownMenu({ options, id, onChange, value }) {
    return (
        <select className="form-select" id={id} onChange={onChange} value={value}>
            {options.map(option => (
                <option key={option.id} value={option.abbreviation}>
                    {option.name}
                </option>
            ))}
        </select>
    );
}

export default DropdownMenu;
