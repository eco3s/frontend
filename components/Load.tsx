import LoadStyles from '../styles/Load.module.css'
import cn from 'classnames'

const Load = () => {
  return (
    <div>
      <div className={LoadStyles.logoIcon}></div>
      <div className={LoadStyles.title}>PROTECTED ANIMAL</div>
    </div>
  )
}

export default Load;