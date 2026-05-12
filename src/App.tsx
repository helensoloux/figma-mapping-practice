import React, { useState } from 'react'
import envestnetLogo from './assets/envestnet-logo.png'
import { Button } from './components/ui/button'
import { Checkbox } from './components/ui/checkbox'
import { Modal } from './components/ui/modal'

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
  const [forgotOpen, setForgotOpen] = useState(false)
  const [resetEmail, setResetEmail] = useState('')
  const [resetEmailFocused, setResetEmailFocused] = useState(false)

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
        <div style={{ marginBottom: 'var(--space-32)' }}>
          <img
            src={envestnetLogo}
            alt="Envestnet"
            style={{ height: 'var(--space-40)', width: 'auto', display: 'block' }}
          />
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

          {/* Remember me + Forgot password */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Checkbox
              label="Remember me"
              checked={remember}
              density="default"
              onChange={setRemember}
            />
            <button
              type="button"
              onClick={() => setForgotOpen(true)}
              style={{
                fontFamily: 'var(--font-family-body)',
                fontSize: 'var(--font-size-paragraph-2)',
                color: 'var(--text-link)',
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
              }}
            >
              Forgot password?
            </button>
          </div>

          {/* Checkbox error example */}
          <Checkbox
            label="I agree to the Terms of Service"
            checked={false}
            error
            errorMessage="You must agree to the Terms of Service to continue"
            density="default"
          />

          {/* Divider */}
          <div style={{ height: '1px', background: 'var(--divider)' }} />

          {/* Submit */}
          <Button label="Sign In" variant="primary" onClick={() => handleSubmit} />
        </form>

        {/* Forgot password modal */}
        <Modal
          isOpen={forgotOpen}
          title="Reset Password"
          description="Enter your email address and we'll send you a link to reset your password."
          primaryLabel="Send Reset Link"
          secondaryLabel="Cancel"
          onClose={() => setForgotOpen(false)}
          onPrimary={() => setForgotOpen(false)}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <label htmlFor="reset-email" style={labelStyle}>
              Email address
            </label>
            <input
              id="reset-email"
              type="email"
              value={resetEmail}
              placeholder="you@example.com"
              onChange={e => setResetEmail(e.target.value)}
              onFocus={() => setResetEmailFocused(true)}
              onBlur={() => setResetEmailFocused(false)}
              style={{
                ...inputStyle,
                boxShadow: resetEmailFocused ? 'var(--shadow-focus)' : 'none',
              }}
            />
          </div>
        </Modal>

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
