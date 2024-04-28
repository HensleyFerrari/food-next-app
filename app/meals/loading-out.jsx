import classes from './loading.module.css'

export default function MealsLoadingPage({children}) {
  return (
    <div className={classes.loading}>
        Fetching meals ...
    </div>
  )
}