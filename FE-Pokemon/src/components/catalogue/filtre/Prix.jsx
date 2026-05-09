import { useState, useEffect } from "react"

function Prix(props) {
    const [param, setParam] = useState(">=")
    const [value, setValue] = useState(0)

    useEffect(() => {
        props.selectPrix(param, value)
    }, [param, value])
  return (
    <>
        <legend>Prix: </legend>
        <select name="param" onChange={p => setParam(p.target.value)}>
            <option value=">=">Mininume</option>
            <option value="<=">Maximume</option>
            <option value="==">Égale</option>
        </select>

        <legend> à </legend>
        <input type="number" value={value} min={0} onChange={v => setValue(parseInt(v.target.value))} placeholder="PokeCredits"/>
    </>
  )
}

export default Prix