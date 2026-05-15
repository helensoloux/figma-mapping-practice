import React from 'react'
import { Button } from './ui/button'
import { Checkbox } from './ui/checkbox'
import { Dropdown } from './ui/dropdown'
import { RadioButton } from './ui/radio-button'

const panelStyle: React.CSSProperties = {
  width: '450px',
  height: '100vh',
  background: 'var(--bg-0)',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
}

const headerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: 'var(--space-32) var(--space-32) var(--space-16)',
  background: 'var(--bg-0)',
  flexShrink: 0,
}

const contentStyle: React.CSSProperties = {
  flex: 1,
  overflowY: 'auto',
  padding: '0 var(--space-32) var(--space-32)',
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--space-24)',
}

const checkboxGroupStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--space-16)',
}

const footerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: 'var(--space-16) var(--space-32)',
  background: 'var(--bg-0)',
  boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.08)',
  flexShrink: 0,
}

export default function FilterPanel() {
  return (
    <div style={panelStyle}>
      <div style={headerStyle}>
        <h3
          style={{
            margin: 0,
            fontFamily: 'var(--font-family-header)',
            fontSize: 'var(--font-size-header-3)',
            fontWeight: 700,
            color: 'var(--default)',
          }}
        >
          Filters
        </h3>
        <Button label="×" variant="tertiary" />
      </div>

      <div style={contentStyle}>
        <Dropdown label="Status" options={['Select', 'Active', 'Inactive', 'Pending']} />
        <Dropdown label="Priority" options={['Select', 'High', 'Medium', 'Low']} />
        <Dropdown label="Message type" options={['Select', 'Alert', 'Notification', 'Reminder']} />
        <Dropdown label="Category" options={['Select', 'System', 'Marketing', 'Compliance']} />
        <Dropdown label="Action required" options={['Select', 'Yes', 'No']} />

        <div style={checkboxGroupStyle}>
          <Checkbox label="Equities" />
          <Checkbox label="Fixed Income" />
          <Checkbox label="Alternatives" />
        </div>

        <RadioButton label="Include managed accounts" />
      </div>

      <div style={footerStyle}>
        <Button label="Clear Filters" variant="tertiary" />
        <div style={{ display: 'flex', gap: 'var(--space-8)' }}>
          <Button label="Cancel" variant="secondary" />
          <Button label="Apply" variant="primary" />
        </div>
      </div>
    </div>
  )
}
