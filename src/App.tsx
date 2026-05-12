import React, { useState } from 'react'
import { Button } from './components/ui/button'
import { Checkbox } from './components/ui/checkbox'
import { Dropdown } from './components/ui/dropdown'
import { Modal } from './components/ui/modal'
import { RadioButton } from './components/ui/radio-button'

const sectionStyle: React.CSSProperties = {
  marginBottom: 'var(--space-40)',
}

const headingStyle: React.CSSProperties = {
  fontFamily: 'var(--font-family-header)',
  fontSize: 'var(--font-size-header-4)',
  fontWeight: 700,
  color: 'var(--default)',
  marginBottom: 'var(--space-16)',
}

export default function App() {
  const [checked, setChecked] = useState(false)
  const [dropdownValue, setDropdownValue] = useState('')
  const [radioValue, setRadioValue] = useState('envestnet')
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div
      style={{
        background: 'var(--bg-2)',
        minHeight: '100vh',
        padding: 'var(--space-40)',
        fontFamily: 'var(--font-family-body)',
      }}
    >
      <h1
        style={{
          fontFamily: 'var(--font-family-header)',
          fontSize: 'var(--font-size-header-2)',
          fontWeight: 700,
          color: 'var(--default)',
          marginBottom: 'var(--space-40)',
        }}
      >
        Envestnet Design System
      </h1>

      <section style={sectionStyle}>
        <h2 style={headingStyle}>Button</h2>
        <div style={{ display: 'flex', gap: 'var(--space-12)', flexWrap: 'wrap' }}>
          <Button label="Primary" variant="primary" />
          <Button label="Secondary" variant="secondary" />
          <Button label="Disabled" variant="primary" disabled />
          <Button label="Secondary Disabled" variant="secondary" disabled />
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={headingStyle}>Checkbox</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
          <Checkbox label="Remember me" checked={checked} onChange={setChecked} />
          <Checkbox label="Disabled" disabled />
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={headingStyle}>Dropdown</h2>
        <div style={{ maxWidth: '320px', display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
          <Dropdown
            label="Institution"
            options={['Envestnet', 'Tamarac', 'Yodlee', 'Redi2']}
            value={dropdownValue}
            onChange={setDropdownValue}
          />
          <Dropdown
            label="Disabled"
            options={['Envestnet']}
            disabled
          />
          <Dropdown
            label="Error state"
            options={['Envestnet', 'Tamarac']}
            error
            errorMessage="Please select an institution"
          />
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={headingStyle}>Radio Button</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
          <RadioButton
            label="Envestnet"
            value="envestnet"
            checked={radioValue === 'envestnet'}
            onChange={setRadioValue}
          />
          <RadioButton
            label="Tamarac"
            value="tamarac"
            checked={radioValue === 'tamarac'}
            onChange={setRadioValue}
          />
          <RadioButton label="Disabled" value="disabled" disabled />
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={headingStyle}>Modal</h2>
        <Button label="Open Modal" onClick={() => setModalOpen(true)} />
        <Modal
          isOpen={modalOpen}
          title="Confirm Action"
          description="Are you sure you want to proceed? This action cannot be undone."
          primaryLabel="Confirm"
          secondaryLabel="Cancel"
          onClose={() => setModalOpen(false)}
          onPrimary={() => setModalOpen(false)}
        />
      </section>
    </div>
  )
}
