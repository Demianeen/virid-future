import type { LabelHTMLAttributes, ReactNode } from 'react'
import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { HStack, VStack } from '../Stack'
import styles from './WithLabel.module.scss'

type HTMLLabelProps = Omit<
  LabelHTMLAttributes<HTMLLabelElement>,
  'value'
>

interface WithLabelProps extends HTMLLabelProps {
  label?: string
  className?: string
  children: ReactNode
  wrapperClassName?: string
  maxWidth?: boolean
  horizontal?: boolean
}

export const WithLabel = memo(
  ({
    className,
    wrapperClassName,
    label,
    children,
    maxWidth,
    horizontal,
    ...props
  }: WithLabelProps) => {
    const Tag = horizontal ? HStack : VStack
    return (
      <Tag className={wrapperClassName} maxWidth={maxWidth}>
        {label && (
          <label
            htmlFor={label}
            className={classNames(styles.label, {}, [
              className,
            ])}
            {...props}
          >
            {label}:{' '}
          </label>
        )}
        {children}
      </Tag>
    )
  }
)

WithLabel.displayName = 'WithLabel'
