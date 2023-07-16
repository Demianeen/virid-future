import { PredictForm } from 'features/Predict'
import { classNames } from 'shared/lib/classNames/classNames'
import { Page } from 'widgets/Page'
import styles from './PredictPage.module.scss'

interface PredictPageProps {
  className?: string
}

const PredictPage = ({ className }: PredictPageProps) => {
  return (
    <Page
      className={classNames(styles.predictPage, {}, [
        className,
      ])}
    >
      <PredictForm />
    </Page>
  )
}

export default PredictPage
