export const InputSelect = ({onChange, name, label, valueArr}) => {
  return (
    <div className="mb-3">
        <label className="form-label mb-1">{label}</label>

        <select 
        className="form-select" 
        aria-label={label}
        name={name}
        onChange={onChange}
        >
            {valueArr.map(value => <option key={value} value={value}>{value[0].toUpperCase() + value.slice(1)}</option>)}
        </select>
    </div>
  )
}
