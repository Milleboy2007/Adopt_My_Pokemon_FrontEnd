import { useState, useEffect } from "react"

function Prix(props) {
    const [param, setParam] = useState(props.valeurActuelle.param)
    const [value, setValue] = useState(props.valeurActuelle.value)

    useEffect(() => {
        props.selectPrix(param, value)
    }, [param, value])
  return (
    <div className="filtre-prix">
        <legend>Prix en PokeCredits: </legend>
        <select name="param" value={param} onChange={p => setParam(p.target.value)}>
            <option value=">=">Minimum</option>
            <option value="<=">Maximum</option>
            <option value="==">Égal</option>
        </select>

        <legend> à </legend>
        <input type="number" value={value} min={0} onChange={v => setValue(parseInt(v.target.value))}/>
    </div>
  )
}

export default Prix