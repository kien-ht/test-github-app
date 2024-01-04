import { ResolvedReport, TestIdentity } from '@commonTypes'

export { getReports, updateTest }

async function getReports(): Promise<ResolvedReport> {
  try {
    const response = await fetch('/api/reports')
    return await response.json()
  } catch (err) {
    throw Error((err as Error).message)
  }
}

async function updateTest(testId: TestIdentity): Promise<void> {
  try {
    await fetch('/api/reports', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(testId)
    })
  } catch (err) {
    throw Error((err as Error).message)
  }
}
