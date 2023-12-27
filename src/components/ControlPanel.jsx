

const ControlPanel = () => {

  const handleClick = () => {
    console.log("tämä nappi toimii")
  }

  return(
    <div>
      <p>Controlpanel</p>
      <button onClick={() => handleClick()}>
      About
    </button>
    </div>
  )
}

export default ControlPanel