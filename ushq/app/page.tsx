"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

export default function Dashboard() {
  const [expenses, setExpenses] = useState<any[]>([])

  useEffect(() => {
    fetchExpenses()
  }, [])

  async function fetchExpenses() {
    const { data, error } = await supabase
      .from("expenses")
      .select("*")

    if (error) console.error(error)
    else setExpenses(data)
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="mt-6">
        {expenses.map((expense) => (
          <div key={expense.id}>
            ₹{expense.amount} - {expense.category}
          </div>
        ))}
      </div>
    </div>
  )
}