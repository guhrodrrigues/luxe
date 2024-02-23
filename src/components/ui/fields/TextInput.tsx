'use client'

import React, { forwardRef, useState, useCallback } from 'react'
import { tv } from 'tailwind-variants'

import { motion, AnimationProps } from 'framer-motion'
import { AlertCircle } from 'lucide-react'

interface TextInputProps extends React.ComponentProps<'input'> {
  feedbackError?: string
}

const EIXO_X_PLACEHOLDER = 24
const STANDARD_DURATION = 0.3

const textInputStyles = tv({
  slots: {
    baseStyle: `min-w-[200px] px-3 py-2 rounded-2xl border border-neutral-800 focus-within:border-[1.5px] 
    focus-within:border-neutral-200 bg-neutral-900 transition-all duration-200 relative data-[filled=true]:border-neutral-200`,
    inputStyle: `outline-none text-base text-neutral-300 bg-transparent relative z-[9999] placeholder:sr-only`,
    placeholderStyle: `text-neutral-500 absolute left-3`,
    feedbackErrorStyle: `flex items-center gap-1 text-sm text-red-300 mt-1`
  },
  variants: {
    error: {
      true: {
        baseStyle: 'border-red-300'
      }
    },
  }
})

const {
  baseStyle, 
  inputStyle, 
  placeholderStyle, 
  feedbackErrorStyle 
} = textInputStyles()

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(({
  placeholder,
  feedbackError = '',
  disabled,
  ...props
}, ref) => {
  const [isFocus, setIsFocus] = useState(false)
  const [internalValue, setInternalValue] = useState('')

  const handle = useCallback((type: 'focus' | 'blur') => {
    setIsFocus(type === 'focus')
  }, [])

  function observeFieldChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInternalValue(event.target.value)
  }

  const isFilled = internalValue.length > 0
  const isFocusOrFilled = isFocus || isFilled

  const isError = feedbackError.length > 0

  const placeholderAnimation: AnimationProps['animate'] = isFocusOrFilled ? {
    x: EIXO_X_PLACEHOLDER,
    filter: 'blur(4px)',
    opacity: 0
  } : {
    x: 0
  }

  return (
    <div>
      <div
        className={baseStyle({ error: isError })}
        data-filled={isFilled}
      >
        <input
          ref={ref}
          type="text"
          className={inputStyle()}
          placeholder={placeholder}
          onFocus={() => handle('focus')}
          onBlur={() => handle('blur')}
          onChange={observeFieldChange}
          disabled={disabled}
          {...props}
        />

        <motion.span
          className={placeholderStyle()}
          initial={{
            x: 0
          }}
          animate={placeholderAnimation}
          transition={{
            easings: ['easeOut'],
            duration: STANDARD_DURATION
          }}
        >
          {placeholder}
        </motion.span>
      </div>

      <motion.span
        className={feedbackErrorStyle()}
        initial={{
          opacity: 0,
        }}
        animate={
          isError ? {
          opacity: 1,
        } : {
          opacity: 0
        }}
        transition={{
          duration: STANDARD_DURATION
        }}
      >
        <AlertCircle size={14} />
        {feedbackError}
      </motion.span>
    </div>
  )
})

TextInput.displayName = 'TextInput'
