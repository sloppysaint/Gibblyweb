import React from 'react'

function MainMiddlebar() {
  return (
    <div>
      <div className="text-center p-8">
          <h2 className="text-3xl mb-4">Save Time on Lesson Prep</h2>
          <p className="text-xl mb-8">Create lessons, gamified quizzes, assessments, and review assignments that your students love and that save you hours of prep every week.</p>
          <div className="flex flex-wrap justify-center">
            <div className="bg-orange-200 m-4 p-6 rounded-lg shadow-md flex-1 max-w-xs">
              <img src="AIGenerator.png" alt="AI Lesson Generator Icon" className="mx-auto mb-4 w-12" />
              <h3 className="text-xl mb-2">AI Lesson Generator</h3>
              <p>With a few button clicks, generate full lesson slides and lesson plan on any topic with AI.</p>
            </div>
            <div className="bg-orange-200 m-4 p-6 rounded-lg shadow-md flex-1 max-w-xs">
              <img src="quiz.png" alt="AI Quiz Generator Icon" className="mx-auto mb-4 w-12" />
              <h3 className="text-xl mb-2">AI Quiz Generator</h3>
              <p>Generate a gamified quiz from a YouTube video, document, topic, or pasted text in no time.</p>
            </div>
            <div className="bg-orange-200 m-4 p-6 rounded-lg shadow-md flex-1 max-w-xs">
              <img src="curriculum.png" alt="Curriculum Aligned Icon" className="mx-auto mb-4 w-12" />
              <h3 className="text-xl mb-2">Curriculum Aligned</h3>
              <p>Paste in your curriculum and expectations and instantly get locally relevant learning material.</p>
            </div>
            <div className="bg-orange-200 m-4 p-6 rounded-lg shadow-md flex-1 max-w-xs">
              <img src="resource.png" alt="Teacher Created Resources Icon" className="mx-auto mb-4 w-12" />
              <h3 className="text-xl mb-2">Teacher Created Resources</h3>
              <p>Pick from our library of ready-to-use materials made by teachers, for teachers.</p>
            </div>
            <div className="bg-orange-200 m-4 p-6 rounded-lg shadow-md flex-1 max-w-xs">
              <img src="dashboard.png" alt="Teacher Dashboard Icon" className="mx-auto mb-4 w-12" />
              <h3 className="text-xl mb-2">Teacher Dashboard</h3>
              <p>Manage your classes, assignments, and student progress with ease.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default MainMiddlebar
