import express from 'express'
import MentorRoutes from './mentor.js'
import StudentRoutes from './student.js'
const router = express.Router()

router.get('/',(req,res)=>{
    res.status(200).send('<h1> Welcome to Mentor and Student Assigning with Database Site </h1>')
})
router.use('/mentor',MentorRoutes)
router.use('/student',StudentRoutes)
export default router
