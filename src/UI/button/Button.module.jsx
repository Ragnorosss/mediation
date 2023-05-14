import cl from 'style/Button.module.scss';
export default function Button({children}) {
  return (
    <button className={cl.cstButton}>
      {children}
    </button>
  )
}
