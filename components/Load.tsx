import LoadStyles from '../styles/Load.module.css'

const Load = () => {
  return (
    <div className={LoadStyles.main}>
      <div className={LoadStyles.logoIcon}></div>
      <div className={LoadStyles.title}>PROTECTED ANIMAL</div>
    </div>
  )
}

export default Load;