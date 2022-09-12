export const InputText = ({ onChange, value, name, label }) => (
    <div className="mb-3">
        <label htmlFor={name} className="form-label mb-1">{label}</label>

        <input 
            onChange={onChange}
            type="text"
            name={name} 
            className="form-control" 
            id={name} 
            placeholder={`${label}`}
            value={value}
            />
    </div>
)