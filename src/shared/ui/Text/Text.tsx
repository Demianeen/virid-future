import React, { memo } from 'react'
import type { Mods } from 'shared/lib/classNames/classNames'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Text.module.scss'

export enum TextTheme {
  DEFAULT = 'normal',
  INVERTED = 'inverted',
  ERROR = 'error',
}

export enum TextAlign {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}

export enum TextSize {
  S = 'small',
  M = 'medium',
  L = 'large',
}

interface TextProps {
  className?: string
  text?: string
  textTitle?: string
  TextTag?: 'p' | 'span'
  title?: string
  titleTitle?: string
  TitleTag?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  theme?: TextTheme
  align?: TextAlign
  size?: TextSize
  maxWidth?: boolean
}

type HeaderTag = 'h1' | 'h2' | 'h3'
const mapSizeToDefaultHeaderTag: Record<
  TextSize,
  HeaderTag
> = {
  [TextSize.S]: 'h3',
  [TextSize.M]: 'h2',
  [TextSize.L]: 'h1',
}

export const Text = memo(
  ({
    className,
    title,
    titleTitle,
    TitleTag,
    text,
    textTitle,
    TextTag = 'p',
    theme = TextTheme.DEFAULT,
    align = TextAlign.LEFT,
    size = TextSize.M,
    maxWidth,
  }: TextProps) => {
    const HeaderTag =
      TitleTag ?? mapSizeToDefaultHeaderTag[size]

    const mods: Mods = {
      [styles.maxWidth]: maxWidth,
    }

    return (
      <div
        className={classNames(styles.textContainer, mods, [
          styles[theme],
          styles[align],
          styles[size],
          className,
        ])}
      >
        {title && (
          <HeaderTag
            title={titleTitle}
            className={styles.title}
          >
            {title}
          </HeaderTag>
        )}
        {text && (
          <TextTag
            title={textTitle}
            className={styles.text}
          >
            {text}
          </TextTag>
        )}
      </div>
    )
  }
)

Text.displayName = 'Text'
