import React from 'react'

function MaintopBar() {
  return (
    <>
      <section className="flex flex-wrap justify-between items-center bg-orange-500 text-white p-8">
          <div className="max-w-lg">
            <h2 className="text-3xl mb-4">Generate Lessons & Quizzes with AI</h2>
            <p className="text-xl mb-6">Save hours of prep each week with Gibbly! Generate ready to use lessons, lesson plans, assessments, quizzes, and gamified review assignments in minutes on any topic with AI.</p>
            <div className="flex gap-4">
              <button className="bg-orange-400 text-white px-6 py-3 rounded-md">Start learning</button>
              <button onClick={()=>window.location.href="/create"} className="bg-orange-400 text-white px-6 py-3 rounded-md">Play</button>
              <button onClick={()=>window.location.href="/pages/Login"} className="bg-orange-400 text-white px-6 py-3 rounded-md">Login</button>
            </div>
          </div>
          <div>
            <img src="StudentStudying.png" alt="Student Studying" className="h-96 w-96" />
          </div>
        </section>
    </>
  )
}

export default MaintopBar
