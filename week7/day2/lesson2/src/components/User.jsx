function User (props) {
  const {name,lastname} = props
  return(
      <div style = {{display:"inline-block", border:"1px solid"}}>
        <h2 className='box'>
          {id}.Name: {name} {lastname}
        </h2>
        <p>{email}</p>
      </div>
  )
}

export default User