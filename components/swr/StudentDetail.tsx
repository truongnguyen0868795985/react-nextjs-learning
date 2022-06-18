import useSWR from 'swr'

export interface StudentDetailProps {
  studentId: any
}

export function StudentDetail({ studentId }: StudentDetailProps) {
  const { data, error, mutate, isValidating } = useSWR(`/students/${studentId}`)

  return <div>{data?.name || '--'}</div>
}
