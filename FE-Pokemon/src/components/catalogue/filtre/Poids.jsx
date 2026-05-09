import { useState, useEffect } from "react"

function Poids(props) {
    const [param, setParam] = useState(">=")
    const [value, setValue] = useState(0)

    useEffect(() => {
        props.selectPoids(param, value)
    }, [param, value])
  return (
    <>
        <legend>Poids: </legend>
        <select name="param" onChange={p => setParam(p.target.value)}>
            <option value=">=">Mininume</option>
            <option value="<=">Maximume</option>
            <option value="==">Égale</option>
        </select>

        <legend> à </legend>
        <input type="number" value={value} min={0} onChange={v => setValue(parseInt(v.target.value))} placeholder="hectograme (hg)"/>
    </>
  )
}

export default Poids