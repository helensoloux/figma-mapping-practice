import React, { useState } from 'react'
import { Button } from './components/ui/button'
import { Checkbox } from './components/ui/checkbox'

const inputStyle: React.CSSProperties = {
  fontFamily: 'var(--font-family-body)',
  fontSize: 'var(--font-size-paragraph-2)',
  color: 'var(--default)',
  background: 'var(--bg-0)',
  border: '1px solid var(--input-divider)',
  borderRadius: 'var(--corner-radius-small)',
  height: 'var(--button-height)',
  padding: '0 var(--space-12)',
  width: '100%',
  outline: 'none',
  boxSizing: 'border-box',
}

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-family-header)',
  fontSize: 'var(--font-size-header-5)',
  fontWeight: 700,
  color: 'var(--default)',
}

export default function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [emailFocused, setEmailFocused] = useState(false)
  const [passwordFocused, setPasswordFocused] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
  }

  return (
    <div
      style={{
        fontFamily: 'var(--font-family-body)',
        fontSize: 'var(--font-size-paragraph-2)',
        color: 'var(--default)',
        background: 'var(--bg-2)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--space-24)',
      }}
    >
      <div
        style={{
          background: 'var(--bg-0)',
          borderRadius: 'var(--corner-radius-small)',
          boxShadow: 'var(--shadow-regular)',
          padding: 'var(--space-40)',
          width: '100%',
          maxWidth: '480px',
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-8)',
            marginBottom: 'var(--space-32)',
          }}
        >
          <div
            style={{
              width: 'var(--space-40)',
              height: 'var(--space-40)',
              background: 'var(--action)',
              borderRadius: 'var(--corner-radius-small)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path
                d="M4 11h14M11 4v14M6 6l10 10M16 6L6 16"
                stroke="white"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span
            style={{
              fontFamily: 'var(--font-family-header)',
              fontSize: 'var(--font-size-paragraph-1)',
              fontWeight: 700,
              color: 'var(--default)',
            }}
          >
            Envestnet
          </span>
        </div>

        {/* Header */}
        <div style={{ marginBottom: 'var(--space-32)' }}>
          <h1
            style={{
              margin: 0,
              marginBottom: 'var(--space-8)',
              fontFamily: 'var(--font-family-header)',
              fontSize: 'var(--font-size-header-2)',
              fontWeight: 700,
              color: 'var(--default)',
            }}
          >
            Sign In
          </h1>
          <p
            style={{
              margin: 0,
              fontFamily: 'var(--font-family-body)',
              fontSize: 'var(--font-size-paragraph-1)',
              color: 'var(--subtle-and-hint)',
            }}
          >
            Access your Envestnet account
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-20)' }}
        >
          {/* Email */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <label htmlFor="email" style={labelStyle}>
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              placeholder="you@example.com"
              autoComplete="email"
              onChange={e => setEmail(e.target.value)}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
              style={{
                ...inputStyle,
                boxShadow: emailFocused ? 'var(--shadow-focus)' : 'none',
              }}
            />
          </div>

          {/* Password */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <label htmlFor="password" style={labelStyle}>
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              placeholder="Enter your password"
              autoComplete="current-password"
              onChange={e => setPassword(e.target.value)}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
              style={{
                ...inputStyle,
                boxShadow: passwordFocused ? 'var(--shadow-focus)' : 'none',
              }}
            />
          </div>

          {/* Remember me */}
          <Checkbox
            label="Remember me"
            checked={remember}
            onChange={setRemember}
          />

          {/* Divider */}
          <div style={{ height: '1px', background: 'var(--divider)' }} />

          {/* Submit */}
          <Button label="Sign In" variant="primary" onClick={() => handleSubmit} />
        </form>

        {/* Footer */}
        <p
          style={{
            margin: 0,
            marginTop: 'var(--space-24)',
            textAlign: 'center',
            fontFamily: 'var(--font-family-body)',
            fontSize: 'var(--font-size-caption)',
            color: 'var(--subtle-and-hint)',
          }}
        >
          By signing in you agree to our{' '}
          <a
            href="#"
            style={{ color: 'var(--text-link)', textDecoration: 'none' }}
          >
            Terms of Service
          </a>{' '}
          and{' '}
          <a
            href="#"
            style={{ color: 'var(--text-link)', textDecoration: 'none' }}
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  )
}
