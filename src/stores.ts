import {writable} from 'svelte/store'

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 10,
    text: 'First feedback'
  },
  {
    id: 2,
    rating: 9,
    text: 'Second Feedback'
  },
  {
    id: 3,
    rating: 8,
    text: 'Third Feedback'
  }
])

