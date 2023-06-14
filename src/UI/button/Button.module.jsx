import cl from 'UI/button/Button.module.scss';
export default function Button({children}) {
  return (
    <button className={cl.cstButton}>
      {children}
    </button>
  )
}
