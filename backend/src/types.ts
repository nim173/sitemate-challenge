import { Record, Number, String, Static } from 'runtypes'

export const Config = Record({
  port: String,
})

export const IssueInput = Record({
  title: String,
  description: String,
})

export const Issue = IssueInput.extend({
  id: Number,
  title: String,
  description: String,
})

export type Config = Static<typeof Config>;
export type IssueInput = Static<typeof IssueInput>;
export type Issue = Static<typeof Issue>;
