import FilterPanel from './components/FilterPanel'

export default function App() {
  return (
    <div
      style={{
        background: 'var(--bg-2)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
      }}
    >
      <FilterPanel />
    </div>
  )
}
