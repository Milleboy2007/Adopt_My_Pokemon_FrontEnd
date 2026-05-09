
function Type(props) {
  return (
    <>
        <select multiple onChange={t => props.selectTypes(Array.from(t.target.selectedOptions, option => option.value))}>
            <option value="normal">Normal</option>
            <option value="fire">FIRE</option>
            <option value="water">WATER</option>
            <option value="grass">GRASS</option>
            <option value="electric">ELECTRIC</option>
            <option value="ice">ICE</option>
            <option value="fighting">FIGHTING</option>
            <option value="poison">POISON</option>
            <option value="ground">GROUND</option>
            <option value="flying">FLYING</option>
            <option value="psychic">PSYCHIC</option>
            <option value="bug">BUG</option>
            <option value="rock">ROCK</option>
            <option value="ghost">GHOST</option>
            <option value="dragon">DRAGON</option>
            <option value="dark">DARK</option>
            <option value="steel">STEEL</option>
            <option value="fairy">FAIRY</option>
        </select>
    </>
  )
}

export default Type