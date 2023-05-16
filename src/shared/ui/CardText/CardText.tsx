import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { VStack } from '../Stack'
import { Card } from '../Card/Card'
import { Text, TextSize } from '../Text/Text'
import styles from './CardText.module.scss'

interface CardTextProps {
  className?: string
  text?: string
  title?: string
}

export const CardText = memo(
  ({ className, text, title }: CardTextProps) => {
    const classes = classNames(styles.card, {}, [className])
    return (
      <VStack gap={1.25}>
        <Card className={classes}>
          <Text title={title} size={TextSize.L} />
        </Card>
        <Card className={classes}>
          <Text text={text} />
        </Card>
      </VStack>
    )
  }
)

CardText.displayName = 'CardText'
