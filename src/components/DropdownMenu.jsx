function DropdownMenu({ options }) {
    return (
        <select className="form-select">
            {options.map(option => (
                <option key={option.id} value={option.abbreviation}>
                    {option.name}
                </option>
            ))}
        </select>
    );
}

export default DropdownMenu;
