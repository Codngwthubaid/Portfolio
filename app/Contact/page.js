"use client"
import React , {useState , useRef} from 'react'
import DownArrow from '../DownArrow/page'

const Contact = () => {
  const onSubmit = (data) => console.log(data)
  const ref = useRef(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const SubmitName = (e) => {
    setName(e.target.value)
  }
  const SubmitEmail = (e) => {
    setEmail(e.target.value)
  }
  
  const SubmitMessage = (e) => {
    setMessage(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sending')
    let data = {
      name,
      email,
      message
    }
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setSubmitted(true)
        setName('')
        setEmail('')
        setMessage('')
      }
    })
  }

  return (
    <>
        <div>
            <div className='flex flex-col justify-center items-center'>
              <div><DownArrow /></div>
            </div>
            <div className='mt-10 flex justify-center items-center text-[90px]'>
              <div className='text-[40px] sm:text-[60px] md:text-[70px] lg:text-[90px]'>&laquo; </div>
              <div className='text-[40px] sm:text-[60px] md:text-[70px] lg:text-[90px]'>contact</div>
              <div className='text-[40px] sm:text-[60px] md:text-[70px] lg:text-[90px]'>&raquo;</div>
            </div>
            <div>
              <div className='text-[#cac068] flex flex-col justify-center items-center m-[5vw]'>
                <div>Skilled full stack developer delivering robust, scalable solutions</div>
                <div>Reach out for collaboration on innovative web projects</div>
              </div>
            </div>

            <div>
              <div >
                <form className='flex flex-col  my-10 mx-[5vw]' action="">
                  <input ref={ref} onChange={(e) => { setName(e.target.value) }} className='text-[#9a99ff] placeholder:text-[#9a99ff] pb-8 text-xl  border border-[#424242] rounded my-2' type="text" placeholder='_name*' name="name"  />

                  <input ref={ref} onChange={(e) => { setEmail(e.target.value) }} className='text-[#9a99ff] placeholder:text-[#9a99ff] pb-8 text-xl  border border-[#424242] rounded my-2' type="email" placeholder='_email*' name="email"  />

                  <textarea ref={ref} onChange={(e) => { setMessage(e.target.value) }} className='text-[#9a99ff] placeholder:text-[#9a99ff] pb-8 h-[40vh] text-xl  border border-[#424242] rounded my-2' name="message" placeholder='_message*'   ></textarea>
                </form>
              </div>
            </div>

            <div className='flex justify-center items-center'>
              <button onClick={(e) => { handleSubmit(e) }}>
                <div className='bg-[#4baed8] text-xl py-3 px-5 hover:bg-[#9a99ff] '>&laquo; send &raquo;</div>
              </button>
            </div>
          </div>
    </>
  )
}

export default Contact
