import { useState, useEffect } from "react"

function Taille(props) {
    const [param, setParam] = useState(">=")
    const [value, setValue] = useState(0)

    useEffect(() => {
        props.selectTaille(param, value)
    }, [param, value])

  return (
    <>
        <legend>Taille en décimètres (dm): </legend>
        <select name="param" onChange={p => setParam(p.target.value)}>
            <option value=">=">Mininume</option>
            <option value="<=">Maximume</option>
            <option value="==">Égale</option>
        </select>

        <legend> à </legend>
        <input type="number" value={value} min={0} onChange={v => setValue(parseInt(v.target.value))}/>
    </>
  )
}

export default Taille