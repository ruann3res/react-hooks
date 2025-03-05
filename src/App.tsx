import { Counter } from "@/components/Counter"

export function App() {
  return (
    <div className="min-h-screen grid place-items-center bg-teal-900">
      <Counter title="Contador" userRole="admin" />
    </div>
  )
}