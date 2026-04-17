import { Outlet } from 'react-router-dom'
import AppSidebar from '../app/appSidebar'
import AppHeader from '../app/appHeader'

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white">
      <AppSidebar />

      {/* Main area — offset by collapsed sidebar (52px + 8px gap) */}
      <div className="ml-[60px] flex flex-col min-h-screen">
        <AppHeader />

        <main className="flex-1 w-full max-w-[1200px] mx-auto px-6 py-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
