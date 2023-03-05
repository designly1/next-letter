import React from 'react'
import AuthLayout from '@/components/Layout/AuthLayout'
import Dashboard from '@/components/Dashboard'

export default function index() {
  return (
    <AuthLayout title="Dashboard">
      <Dashboard />
    </AuthLayout>
  )
}