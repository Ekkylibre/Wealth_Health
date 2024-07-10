function DropdownMenu({ options, id, onChange, value, placeholder }) {
    return (
        <select className="form-select" id={id} onChange={onChange} value={value}>
            {placeholder && <option value="" disabled>{placeholder}</option>}
            {options.map(option => (
                <option key={option.id} value={option.abbreviation}>
                    {option.name}
                </option>
            ))}
        </select>
    );
}

export default DropdownMenu;
