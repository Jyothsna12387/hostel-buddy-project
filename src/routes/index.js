import { createRouter, createWebHistory } from 'vue-router'

import ComplaintManagement from '../components/complaintmanagement.vue'
import FeedbackReview from '../components/feedbackreview.vue'
import FeeManagement from '../components/feemanagement.vue'
import LeaveApproval from '../components/leaveapproval.vue'
import MessMenuUpdate from '../components/messmenuupdate.vue'
import PaymentTracking from '../components/paymenttracking.vue'
import RoomChange from '../components/roomchange.vue'

const routes = [
  { path: '/complaints',name: 'ComplaintManagement', component: ComplaintManagement },
  { path: '/feedback',name: 'FeedbackReview',component: FeedbackReview },
  { path: '/fees',name: 'FeeManagement',component: FeeManagement },
  { path: '/leave',name: 'LeaveApproval',component: LeaveApproval },
  { path: '/messmenu',name: 'MessMenuUpdate',component: MessMenuUpdate },
  { path: '/payments',name: 'PaymentTracking',component: PaymentTracking },
  { path: '/roomchange', name: 'RoomChange', component: RoomChange },
   
  {path: '/', redirect: '/complaints'}
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router