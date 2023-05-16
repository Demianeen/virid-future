import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
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
      <Button type='button'>Predict</Button>
    </Page>
  )
}

export default PredictPage
