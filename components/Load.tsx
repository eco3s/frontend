import LoadStyles from '../styles/Load.module.css'

const Load = () => {
  return (
    <div className={LoadStyles.main}>
      <div className={LoadStyles.logoIcon}></div>
      <div className={LoadStyles.title}>대충 만든 로딩페이지</div>
    </div>
  )
}

export default Load;