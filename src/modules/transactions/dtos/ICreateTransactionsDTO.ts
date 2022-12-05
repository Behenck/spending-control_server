interface ICreateTransactionsDTO {
  id?: string
  title: string
  price: number
  description?: string
  type: string
  repeat?: boolean
  repeatRecurrent?: string
  repeatFixed?: boolean
  nRepeat?: number
  dueDate: Date
  bankName?: string
  userId: string
  categoryId?: string
}

export { ICreateTransactionsDTO }
